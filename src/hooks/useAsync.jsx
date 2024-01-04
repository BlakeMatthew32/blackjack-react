import { useCallback, useState, useEffect } from "react"

export default function useAsnyc(callback, dependencies = []) {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState()
    const [ value, setValue ] = useState()

    const callbackMemo = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemo()
    }, [callbackMemo])

    return { loading, error, value }
}