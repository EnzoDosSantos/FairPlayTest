import img from "../assets/test.png"
import useCards from "../hooks/useCards"
import getCardSorts from "../services/getCardsSorts"
import Alert from "../alert/Alert"
import { useState, useEffect } from "react"
import Card from "../components/Card"
import styled from "styled-components"

function Home() {

    const [cardsState, setCardsState] = useState([])
    const [debounce, setDebounce] = useState(true)
    const [queens, setQueens] = useState([])
    const [alert, setAlert] = useState("")
    const [sorts, setSorts] = useState([])

    const { cards, loading, error, reloadCards } = useCards()


    useEffect(() => {
        alert.length &&
            Alert.fire({
                icon: 'error',
                title: alert
            })
        return () => setAlert("")
    }, [alert])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    const handleClick = () => {
        if(!debounce){
            return setAlert("You can only click once per second")
        }
        const cardToPop = cards.pop()
        if (cardToPop.value === "QUEEN") {
            setQueens(prevQueens => [...prevQueens, cardToPop])
        }

        setCardsState(prevCards => [...prevCards, cardToPop])
        setSorts(getCardSorts(cardsState))
        // setDebounce(false)
        // setTimeout(() => setDebounce(true), 1000)
    }

    const handleReload = () => {
        setCardsState([])
        setQueens([])
        reloadCards()
    }

    return (
        <>
            {
                queens.length === 4 ? <>
                    <h1>You have found all the queens!</h1>
                    <button onClick={handleReload}>Reload</button>

                    <h2>Your results:</h2>
                    <Container2>
                        <Container> {sorts[0].suit} 
                        {
                            sorts[0].cards.map((result, index) => (
                                <Card key={index} image={result.image} />
                            ))
                        }
                        </Container>
                        <Container> {sorts[1].suit} 
                        {
                            sorts[1].cards.map((result, index) => (
                                <Card key={index} image={result.image} />
                            ))
                        }
                        </Container>
                        <Container> {sorts[2].suit} 
                        {
                            sorts[2].cards.map((result, index) => (
                                <Card key={index} image={result.image} />
                            ))
                        }
                        </Container>
                        <Container>{sorts[3].suit}
                            {
                                sorts[3].cards.map((result, index) => (
                                    <Card key={index} image={result.image} />
                                ))
                            }
                        </Container>
                    </Container2>
                </> :
                    <div>
                        <h1>Home</h1>
                        <button onClick={handleClick}>Add Card</button>
                        <img src={img} />
                        <RealConteiner>
                            {

                                cardsState.map((card, index) =>
                                    <div key={index}>
                                        <Card
                                            image={card.image}
                                            value={card.value}
                                            suit={card.suit}
                                        />
                                    </div>
                                )
                            }
                        </RealConteiner>
                    </div>
            }
        </>
    )
}

const Container2 = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: rebeccapurple;
    /* margin: 20px; */
`

const RealConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    align-items: center;
    /* background-color: rebeccapurple; */
    margin: 20px;
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export default Home