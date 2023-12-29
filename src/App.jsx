
import Header from "./components/header"
import Bank from "./components/bank"
import Bet from "./components/bet"
import { useState } from "react"

function App() {

  const [ playersBet, setPlayersBet ] = useState(0)
  const [ bankAmount, setBankAmount ] = useState(1000)

  function handleBet(betAmount) {
    setPlayersBet(prev => prev + betAmount)
  }

  function updateBank(value) {
    setBankAmount(prev => prev - value)
  }

  function resetBet() {
    setBankAmount(prev => prev + playersBet)
    setPlayersBet(0)
  }

  return (
    <div className="main__container">
      <Header/>
      <h1>blackjack</h1>
      <Bet currentBet={playersBet} />
      <Bank bankAmount={bankAmount} changeBankAmount={updateBank} handleBet={handleBet} resetBet={resetBet}/>
    </div>
  )
}

export default App
