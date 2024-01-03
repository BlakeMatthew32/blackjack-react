/* eslint-disable react/prop-types */

export default function CardCount({ cardsRemaining }) {
    return (
        <div className="header__remaining-cards">
            <p>Cards remaining: <span>{cardsRemaining}</span></p>
        </div>
    )
}