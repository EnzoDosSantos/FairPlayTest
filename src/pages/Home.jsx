import useCards from "../hooks/useCards"
import getCardSorts from "../services/getCardsSorts"
import Alert from "../alert/Alert"
import Results from "../components/results/Results"
import Deck from "../components/decks/Deck"
import Loading from "../components/loading/Loading"
import Error from "../components/error/Error"
import { useState, useEffect } from "react"

function Home() {

    const [cardsState, setCardsState] = useState([])
    const [debounce, setDebounce] = useState(true)
    const [queens, setQueens] = useState([])
    const [alert, setAlert] = useState("")
    const [sorts, setSorts] = useState([])

    const { cards, loading, error, reloadCards } = useCards()

    useEffect(() => {
        setSorts(getCardSorts(cardsState))
    }, [cardsState])

    useEffect(() => {
        queens.length === 4 &&
            Alert.fire({
                title: 'You win!',
                icon: 'success',
                text: 'You found all the queens, you are a true master of the game.'
            })
        alert === "success" &&
            Alert.fire({
                title: 'Great job!',
                icon: 'success',
                text: `You found a queen, you still need to get ${4 - queens.length} more queens.`
            })
        alert === "restart" &&
            Alert.fire({
                title: 'Restart',
                icon: 'info',
                text: 'You restarted the game, you can find all the queens again.'
            })
        alert === "error" &&
            Alert.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'You can only click once per second, sorry :(.'
            })

        return () => setAlert("")
    }, [alert, queens])


    const handleClick = () => {
        if (!debounce) {
            return setAlert("error")
        }
        const copyState = cards
        const cardToPop = copyState.pop()
        if (cardToPop.value === "QUEEN") {
            setQueens(prevQueens => [...prevQueens, cardToPop])
            setAlert("success")
        }
        setCardsState(prevCards => [...prevCards, cardToPop])
        setDebounce(false)
        setTimeout(() => setDebounce(true), 1000)
    }


    const handleReload = () => {
        setAlert("restart")
        setCardsState([])
        setQueens([])
        reloadCards()
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error message={error.message} handleReload={handleReload}/>
    }

    return (
        <>
            {
                queens.length === 4 ?
                    <Results
                        handleReload={handleReload}
                        sorts={sorts}
                        result={cardsState.length}
                    />
                    :
                    <Deck
                        handleClick={handleClick}
                        cardsState={cardsState}
                    />
            }
        </>
    )
}


export default Home