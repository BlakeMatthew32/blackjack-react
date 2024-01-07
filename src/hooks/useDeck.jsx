
import useFetch from "./useFetch";

let DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2"

export default function useDeck(deckId = "", options = {}, dependencies = []) {

    return useFetch(DECK_API_URL, options, dependencies)

}