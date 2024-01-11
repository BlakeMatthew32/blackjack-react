/* eslint-disable react/prop-types */

import { useState } from "react"
import bettingAmounts from "../bettingAmounts"

const Bank = ({ handleBet }) => {

    const [bankTotal, setBankTotal] = useState(1000)

    const updateBank = (value) => {
        setBankTotal(prev => prev -= value)
        handleBet(value)
    }

    const bankButtons = bettingAmounts.map((elm, index) => {

        return <button 
            className={`benk__button-${elm} bank__button`}
            onClick={() => updateBank(elm.value)} 
            disabled={bankTotal < elm.value}
            style={{"borderColor": elm.color, "outline": `2px solid ${elm.color}`}}
            key={index}
            >
                {elm.value}
            </button>
    })

    return (
        <div className="bank">
            <p className="bank__total">Bank: ${bankTotal}</p>
            <div className="bank__button-container">
                {bankButtons}
            </div>
        </div>
    )
}

export default Bank