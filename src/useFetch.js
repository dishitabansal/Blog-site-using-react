import { useState, useEffect } from "react";

const useFetch = (url) => {  // custom hooks in react need to start with use

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data');
                }
                return res.json(); // converts json to javascript object as this response object isnt the actual data
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        // }, 1000)

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;