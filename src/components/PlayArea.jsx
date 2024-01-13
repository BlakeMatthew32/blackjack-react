
import { useState } from "react"

import Betting from "../pages/betting"
import Playing from "../pages/playing/playing"
import Bank from "./bank"

// hooks
import useDeck from "../hooks/useDeck"

const PlayArea = () => {

    // encapsulate betting logicq in a custom hook once game is working
    const [ bet, setBet ] = useState(0)
    const [ activeBet, setActiveBet ] = useState(0)
    const [ gameActive, setGameActive ] = useState(false)
    
    const { playerCards, dealerCards, cardsRemaining, deal } = useDeck()

    const handleBet = (value) => {
        setBet (prev => prev += value)
    }

    const handleDeal = (betAmount) => {
        setActiveBet(betAmount)
        setBet(0)
        deal()
        setGameActive(true)
    }

    return (
        <main className="main">
            <p className="main__info">Cards Remaining: {cardsRemaining}</p>
            <p className="main__info">Placed Bet: ${activeBet}</p>
            {gameActive? 
                <Playing
                    playerCards={playerCards} 
                    dealerCards={dealerCards} /> :
                <Betting 
                    betAmount={bet}  
                    handleDeal={handleDeal} />
            }
            <Bank handleBet={handleBet} />
        </main>
    )
}

export default PlayArea