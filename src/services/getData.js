import axios from 'axios';

export const getData = async () => {
    const { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
    return data.cards
}

export default getData;