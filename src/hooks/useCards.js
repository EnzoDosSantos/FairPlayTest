import getData from "../services/getData";
import { useState, useEffect } from "react";

const useCards = () => {

    const [cards, setCards] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        getData()
            .then(data => {
                setCards(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const reloadCards = () => {
        setLoading(true)
        setError(null)
        getData()
            .then(data => {
                setCards(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    return { cards, loading, error, reloadCards }
}

export default useCards;