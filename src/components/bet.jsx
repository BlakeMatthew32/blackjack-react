/* eslint-disable react/prop-types */


export default function Bet({ currentBet }) {
    return (
        <div className="bet__container">
            <h2>Place your Bets!</h2>
            <p>${currentBet}</p>
            <div className="bet__buttons">
                { currentBet != 0 && <button>Deal</button> }
            </div>
        </div>
        
    )
}