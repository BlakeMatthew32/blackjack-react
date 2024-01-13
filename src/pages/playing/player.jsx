/* eslint-disable react/prop-types */
const Player = ({cards}) => {

    const cardsElms = cards.map(card => {

        const {code, image, value} = card
        const keyValue = Math.floor(Math.random() * Math.random() * 1000)
        
        return (
            <img 
                className="playing_card" 
                src={image} 
                alt={code} 
                data-value={value} 
                key={keyValue}
            />
        )
    })

    return (
        <div className="playing_dealer-container">
            {cardsElms}
        </div>
    )
}

export default Player