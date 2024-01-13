
import { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";

const DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2"

const useDeck = ( options = {}, dependencies = [] ) => {

    const deckIdRef = useRef()
    const [dealerCards, setDealerCards] = useState([])
    const [playerCards, setPlayerCards]= useState([])
    const [cardsRemaining, setCardsRemaining] = useState(0)
    const initRender = useRef(true)

    const {value} = useFetch(DECK_API_URL, options, dependencies)

    const deal = () => {
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckIdRef.current}/draw/?count=4`)
            .then(res => res.json())
            .then(data => {
                setPlayerCards([data.cards[0], data.cards[2]])
                setDealerCards([data.cards[1], data.cards[3]])
                setCardsRemaining(data.remaining)
            })
    }

    useEffect(() => {
        if(!initRender.current) {
            deckIdRef.current = value?.deck_id
            setCardsRemaining(value?.remaining)
            console.log(value)
        } else {
            initRender.current = false
        }
    }, [value])

    return { dealerCards, playerCards, cardsRemaining, deal }
}

export default useDeck