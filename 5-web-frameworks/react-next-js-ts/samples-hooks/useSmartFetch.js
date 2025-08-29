import { useEffect, useRef } from 'react'

let [
    timeout, 
    controllerRef, timeoutRef,
    controller, attempt, 
] = []

const while_ = (condition, func) =>
    new Promise((resolve, reject) => () => (
        loop = () => (
            condition() ? resolve()
            : Promise.resolve(func()).then(() => loop()).catch(reject)
        ),
        loop()
    ))

/* * usage

counter = 0
while_(
    () => counter < 5,
    () => (
        counter++,
        log(`Iteration ${counter}`),
        new Promise(resolve => setTimeout(resolve, 1000))
    )
).then(() => log('Done'))

*/

const sleep = (ms, signal) => new Promise((resolve, reject) => (
    timeout = setTimeout(resolve, ms),
    signal && signal.addEventListener('abort', () => (
        clearTimeout(timeout),
        reject(new DOMException('Aborted', 'AbortError'))
    ))
))

export const useSmartFetch = ({
    timeout = 8000,
    retries = 2,
    backoffBase = 400,
}) => (
    controllerRef = useRef(),
    timeoutRef = useRef(),
    // * clean up on timeout
    useEffect(() => {
        (() => (
            controllerRef.current && controllerRef.current.abort(),
            timeoutRef.current && clearTimeout(timeoutRef.current)
        ));
    }, []),
    useCallback(async (url, options = {}) => (
        // * abort previous request if exists
        controllerRef.current && controllerRef.current.abort(),
        controller = new AbortController(),
        controllerRef.current = controller,
        attempt = 0,
        while_(true, async () => (
            // * clear any existing timeout
            timeoutRef.current && clearTimeout(timeoutRef.current),
            // * set timeout for request
            timeoutRef.current = setTimeout(() =>
                controller.abort(new Error(`Requet timeout after ${timeout}ms`)),
                timeout
            ),
            await (async () => {
                try {
                    const res = await fetch(url, {
                        ...options, signal: controller.signal
                    })
                    clearTimeout(timeoutRef.current)
                    if (!res.ok) { // throw error for retryable status codes
                        if (
                            attempt < retries && (res.status == 429)
                            || res.status >= 500
                        ) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
                    }
                    return res
                } catch (err) {
                    clearTimeout(timeoutRef.current)
                    if (err.name === 'AbortError')
                        throw err
                    if (attempt++ >= retries)
                        throw new Error(`Failed after ${retries + 1} attempts: ${err.message}`)
                    // * calculate delay with exponential backoff
                    const delay = backoffBase * Math.E.pow(2, attempt - 1)
                    await sleep(delay, controller.signal)
                }
            })()
        ))
    ), [timeout, retries, backoffBase])
)
