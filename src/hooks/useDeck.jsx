import { useRef } from "react";
import useFetch from "./useFetch";

let DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2"

export default function useDeck(deckId = "", options = {}, dependencies = []) {

    const firstsRenderRef = useRef(true)
    const fetchRef = {...useFetch(DECK_API_URL, options, dependencies)}

    if(!firstsRenderRef.current) {
        DECK_API_URL = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=104`
    } else {
        firstsRenderRef.current = false
    }

    return fetchRef
}