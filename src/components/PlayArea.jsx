
import Betting from "../pages/betting"
import Bank from "./bank"

// hooks
import useDeck from "../hooks/useDeck"

const PlayArea = () => {

    const {value: deck} = useDeck()

    return (
        <main className="main">
            <p className="main__cards-remaining">Cards Remaining: {deck ? deck.remaining : 0}</p>
            <Betting />
            <Bank />
        </main>
    )
}

export default PlayArea