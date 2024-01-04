/* eslint-disable react/prop-types */


export default function Bet({ currentBet, handleDeal }) {

    return (
        <div className="bet__container">
            <h1 className="bet__heading">Place your Bets!</h1>
            <p className="bet__player-bet">${currentBet}</p>
            <div className="bet__buttons">
                <button 
                    className="bet__deal-button"
                    onClick={handleDeal} 
                    disabled={ currentBet === 0 }
                    >
                        Deal
                </button>
            </div>
        </div>
        
    )
}