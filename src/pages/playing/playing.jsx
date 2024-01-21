/* eslint-disable react/prop-types */
import Player from "./player"
import Dealer from "./dealer"
import { useState } from "react"

const Playing = ({ playerCards, dealerCards, deckId }) => {

    const [playerScore, setPlayerScore] = useState(0)
    const [dealerScore, setDealerScore] = useState(0)

    return (
        <div className="playing_container">
            <Dealer cards={dealerCards}/>
            <div className="playing_game-container">
                <button>Hit</button>
                <button>Stick</button>
            </div>
            <Player cards={playerCards}/> 
        </div>
        
    )
}

export default Playing