/* eslint-disable react/prop-types */
import Player from "./player"
import Dealer from "./dealer"

const Playing = ({ playerCards, dealerCards }) => {
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