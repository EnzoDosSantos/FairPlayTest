function getCardSorts(cards){
    const cardSorts = {}
    cards.forEach(card => {
        const { value, suit, image } = card

        if (!cardSorts[suit]) {
            cardSorts[suit] = []
        }

        const cardToPush ={
            value,
            image
        }

        cardSorts[suit].push(cardToPush)
    } )

    const getRealValue = (value) => {
        if (value === "ACE") {
            return 14
        } else if (value === "KING") {
            return 13
        } else if (value === "QUEEN") {
            return 12
        } else if (value === "JACK") {
            return 11
        } else {
            return value
        }
    }
    const sortCards = (a, b) => {
        return getRealValue(a.value) - getRealValue(b.value)
    }

    const sortedCards = Object.keys(cardSorts).map(suit => {
        return {
            suit,
            cards: cardSorts[suit].sort(sortCards)
        }
    } )

    return sortedCards
}



export default getCardSorts;