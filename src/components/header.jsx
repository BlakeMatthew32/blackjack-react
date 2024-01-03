/* eslint-disable react/prop-types */
import CardCount from "./cardCount"

export default function Header({ cardsRemaining }) {
    return (
        <div className="header">
            <div className="header__nav-container">
                <h2 className="header__logo">Blackjack!</h2>
                <nav className="header__nav">
                    <button>$ Cashout</button>
                    <button>Menu</button>
                </nav>
            </div>
            <CardCount cardsRemaining={cardsRemaining} />
        </div>
    )
}