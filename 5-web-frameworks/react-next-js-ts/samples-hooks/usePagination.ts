'use client'_

import { useState, useEffect, useCallback } from 'react'
import DomainTypes, { User, Order } from '@/hooks/useDomainTypes'

type ResponseData<T> = {
    data: T[],
    pages: number,
    count: number,
    page: number
}

type fetchData<T> = (
    page?: number,
    limit?: number,
    extraParams?: any
) => Promise<ResponseData<T>>

export const usePagination = <T>(
    getData: fetchData<T>,
    dataLimit: number,
    extraParams?: any,
    [
        data, setData,
        dataObjects, setDataObjects,
        currentPage, setCurrentPage,
        pages, setPages,
        loading, setLoading,
        getAllDataObjects, fetchData, search,
        nextPage, setPage, prevPage
    ] = []
) => (
    [data, setData] = useState<T[]>(),
    [dataObjects, setDataObjects] = useState<T[]>(),

    [currentPage, setCurrentPage] = useState(1),
    [pages, setPages] = useState(1),
    [loading, setLoading] = useState(false),

    getAllDataObjects = async (
        [res, data] = []
    ) => (
        res = await (
            !!extraParams
            ? getData(undefined, undefined, extraParams)
            : getData()
        ),
        console.log('get', res),
        res && (
            data = res?.data ?? [],
            console.log('Data: ', typeof data, data),
            setDataObjects(data)
        )
    ),

    fetchData = useCallback(async (
        [res, data] = []
    ) => (
        setLoading(true),
        res = await getData(currentPage, dataLimit, extraParams),
        console.log('fetch', res),
        res
        ? (
            data = res?.data ?? [],
            console.log('Data: ', typeof data, data),
            setData(data),
            setPages(res?.pages),
            setCurrentPage(res?.page || 1)
        ) : setData(undefined),
        setLoading(false)
    ), [currentPage, dataLimit]),

    search = (
        searchInput: string,
        domainType: DomainTypes, // ! compensative argument // todo: optimize generics
        [res] = []
    ) => (
        !!searchInput
        ? (
            !!dataObjects && (
                res = dataObjects.filter((dataObject: T) => {
                    console.log(dataObject)
                    switch (domainType) {
                        case DomainTypes.User:
                            ( // ! todo: test: returned value
                                (dataObject as User)?.first_name
                                    .toLowerCase()
                                    .includes(
                                        searchInput.toLowerCase()
                                    )
                                ||
                                (dataObject as User)?.last_name
                                    .toLowerCase()
                                    .includes(
                                        searchInput.toLowerCase()
                                    )
                            )
                        case DomainTypes.Order:
                            ( // ! todo: test: returned value
                                (dataObject as Order)?.title // ! todo: confirm 'order' title-prop
                                    .toLowerCase()
                                    .includes(
                                        searchInput.toLowerCase()
                                    )
                            )
                    }
                }),
                console.log(res),
                setData(res)
            )
        ) : fetchData()
    ),

    useEffect(() => getAllDataObjects(), []),
    useEffect(() => fetchData(), [currentPage, fetchData]),

    nextPage = () => setCurrentPage(prevPage => prevPage + 1),
    prevPage = () => currentPage > 1 && setCurrentPage(prevPage => prevPage - 1),
    setPage = (page: number) => setCurrentPage(page),

    {
        currentPage, pages, data,
        prevPage, nextPage, setPage,
        search, loading
    }
)
