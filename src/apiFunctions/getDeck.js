
export default async function getDeck(setDeck) {
    const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2")
    response.json().then(deck => {
        setDeck(deck)
    })
}