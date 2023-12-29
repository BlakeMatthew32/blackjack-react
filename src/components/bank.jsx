import { useState } from "react"
import bettingAmounts from "./bettingAmounts"


export default function Bank() {
    const [ bankAmount, setBankAmount ] = useState(1000)

    function updateBank(value) {
        setBankAmount(prev => prev - value)
    }

    const bettingButtons = bettingAmounts.map((amount, index) => {
        return (
            <button 
                key={index} 
                disabled={amount > bankAmount}
                onClick={() => updateBank(amount)}
                >
                    {amount}
            </button>
        )
    })

    return (
        <div className="bank__container">
            <p className="bank__total">Bank: ${bankAmount}</p>
            
            <div className="bank__betting-buttons">
                <button 
                    disabled={bankAmount <= 0} 
                    onClick={() => updateBank(bankAmount)}
                    className="bank__all-in"
                    >
                        All in
                </button>
                {bettingButtons}
            </div>
        </div>
    )
}