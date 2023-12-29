import CardCount from "./cardCount"

export default function Header() {
    return (
        <div className="header">
            <nav className="header__nav">
                <button>$ Cashout</button>
                <button>Menu</button>
            </nav>
            <CardCount/>
        </div>
    )
}