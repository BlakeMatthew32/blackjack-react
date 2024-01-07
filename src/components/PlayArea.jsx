
import Betting from "../pages/betting"
import Bank from "./bank"

const PlayArea = () => {
    return (
        <main className="main">
            <p className="main__cards-remaining">Cards Remaining: 0</p>
            <Betting />
            <Bank />
        </main>
    )
}

export default PlayArea