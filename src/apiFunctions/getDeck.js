
export default async function getDeck() {
    const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const deck = await response.json()
    return deck
}