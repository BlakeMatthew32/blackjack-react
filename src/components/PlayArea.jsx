
import { useState } from "react"

import Betting from "../pages/betting"
import Bank from "./bank"

// hooks
import useDeck from "../hooks/useDeck"

const PlayArea = () => {

    // encapsulate betting logic in a custom hook once game is working
    const [ bet, setBet ] = useState(0)
    const [ activeBet, setActiveBet ] = useState(0)

    const handleBet = (value) => {
        setBet (prev => prev += value)
    }

    const handleDeal = (betAmount) => {
        setActiveBet(betAmount)
        setBet(0)
    }

    
    const {value: deck} = useDeck()

    return (
        <main className="main">
            <p className="main__info">Cards Remaining: {deck ? deck.remaining : 0}</p>
            <p className="main__info">Placed Bet: ${activeBet}</p>
            <Betting betAmount={bet}  handleDeal={handleDeal} />
            <Bank handleBet={handleBet} />
        </main>
    )
}

export default PlayArea