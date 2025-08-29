import { useState } from 'react'
import { useSmartFetch } from '../useSmartFetch'

let [
    loading, setLoading,
    data, setData,
    error, setError,
    attempts, setAttempts,
    smartFetch, fetchData,
] = []

export default FetchComponent = () => (
    [loading, setLoading] = useState(false),
    [data, setData] = useState(null),
    [error, setError] = useState(null),
    [attempts, setAttempts] = useState(0),
    smartFetch = useSmartFetch({
        timeout: 5000,
        retries: 2,
        backoffBase: 100
    }),
    fetchData = async (
        url, shouldFail = false,
        [attemptCount] = []
    ) => (
        setLoading(true), setError(null), setData(null), setAttempts(0),
        attemptCount = 0,
        await (async () => {
            try { // for demonstration, use a URL that fails when shouldFail == true
                const testUrl = shouldFail
                    ? 'https://httpbin.org/status/500'
                    : 'https://jsonplaceholder.typicode.com/posts/1'
                const response = await smartFetch(url || testUrl)
                const jsonData = await response.json()
                setData(jsonData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        })()
    ),
    (
        <>
            <div style={{  padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h2>Smart Fetch Hook Demo</h2>
                <p>This demo shows the useSmartFetch hook with timeout, retry, and backoff capabilities.</p>
                <div style={{ marginBottom: '20px' }}>
                    <button
                        onClick={() => fetchData('https://jsonplaceholder.typicode.com/')}
                        disabled={loading} stype={buttonStyle}
                    >
                        {loading ? 'Loading...' : 'Fetch Data (Success)'}
                    </button>
                    <button
                        onClick={() => fetchData('https://httpbin.org/status/500', true)}
                        disabled={loading} stype={{ ...buttonStyle, backgroundColor: '#ff4757' }}
                    >
                        {loading ? 'Loading...' : 'Fetch Data (Will Fail)'}
                    </button>
                    {loading &&
                        <div style={{ marginTop: '20px' }}>
                            <div style={loadingStyle}>Request in progress ...</div>
                            <p>Try clicking the buttons again to see the abort functionality!</p>
                        </div>
                    }
                </div>
                {error &&
                    <div style={errorStyle}>
                        <h3>Error:</h3><p>{error}</p>
                    </div>
                }
                {data &&
                    <div style={dataStyle}>
                        <h3>Data:</h3><pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                }
                <div style={infoStyle}>
                    <h3>How it works:</h3>
                    <ul>
                        <li><strong>Timeout</strong>: 5 seconds (aborts request if it takes longer)</li>
                        <li><strong>Retries</strong>: 2 additional attempts on failure</li>
                        <li><strong>Backoff</strong>: 1000ms, 2000ms delays between retries</li>
                        <li><strong>Retry Conditions</strong>: HTTP 429 or 5xx status codes</li>
                        <li><strong>Abort</strong>: Previous requests are cancelled when new ones are made</li>
                    </ul>
                </div>
            </div>
        </>
    )
)
