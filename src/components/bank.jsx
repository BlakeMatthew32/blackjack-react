/* eslint-disable react/prop-types */
import bettingAmounts from "../bettingAmounts"


export default function Bank({ handleBet, bankAmount, changeBankAmount, resetBet }) {

    function handleButtonClick(value) {
        handleBet(value)
        changeBankAmount(value)
    }

    const bettingButtons = bettingAmounts.map((amount, index) => {
        return (
            <button 
                key={index} 
                disabled={amount > bankAmount}
                onClick={() => handleButtonClick(amount)}
                >
                    {amount}
            </button>
        )
    })

    return (
        <div className="bank__container">
            <div className="bank__info-container">
                <p className="bank__total">Bank: ${bankAmount}</p>
                <button onClick={resetBet}>Reset Bet</button>
            </div>
            
            
            <div className="bank__betting-buttons">
                <button 
                    disabled={bankAmount <= 0} 
                    onClick={() => handleButtonClick(bankAmount)}
                    className="bank__all-in"
                    >
                        All in
                </button>
                {bettingButtons}
            </div>
        </div>
    )
}