
import bettingAmounts from "../bettingAmounts"

const Bank = () => {

    const bankButtons = bettingAmounts.map((elm, index) => {

        const handleClick = (amount) => {
            console.log(amount)
        }

        return <button 
            className={`benk__button-${elm} bank__button`}
            onClick={() => handleClick(elm.value)} 
            style={{"borderColor": elm.color}}
            key={index}
            >
                {elm.value}
            </button>
    })

    return (
        <div className="bank">
            <p className="bank__total">Bank: $1000</p>
            <div className="bank__button-container">
                {...bankButtons}
            </div>
        </div>
    )
}

export default Bank