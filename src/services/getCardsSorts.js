function getCardSorts(cards){
    const cardSorts = {}
    cards.forEach(card => {

        const { value, suit, images } = card

        if (!cardSorts[suit]) {
            cardSorts[suit] = []
        }

        cardSorts[suit].push(card = {
            value,
            image : images.png
        })
    })

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
    console.log(sortedCards, "sortedCards")
    return sortedCards
}

export default getCardSorts;