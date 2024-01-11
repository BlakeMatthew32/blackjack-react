/* eslint-disable react/prop-types */

const Betting = ({ betAmount, handleDeal }) => {

    return (
        <div className="betting__container">
            <h1>Place Your Bets!</h1>
            <p className="betting__bet">${betAmount}</p>
            <button 
                className="betting__deal-button" 
                disabled={betAmount <= 0}
                onClick={() => {handleDeal(betAmount)}}
                >
                    DEAL
            </button>
        </div>
    )
}

export default Betting