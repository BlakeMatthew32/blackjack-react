
import Header from "./components/header"
import { useEffect, useState } from "react"
import Playing from "./pages/playing/playing"
import Betting from "./pages/betting/betting"
import getDeck from "./apiFunctions/getDeck"

function App() {

  const [ playersBet, setPlayersBet ] = useState(0)
  const [ bankAmount, setBankAmount ] = useState(1000)
  const [ playing, setPlaying ] = useState(false)

  const [ deck, setDeck ] = useState(null)

  useEffect(() => {
    getDeck(setDeck)
  }, [])


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

  function handleDeal() {
    setPlaying(true)
  }

  return (
    <div className="main__container">
      <Header cardsRemaining={!deck ? 0 : deck.remaining} />
      {playing ? <Playing /> : <Betting 
        currentBet={playersBet} 
        handleDeal={handleDeal} 
        bankAmount={bankAmount} 
        changeBankAmount={updateBank} 
        handleBet={handleBet} 
        resetBet={resetBet}
        />
      }
    </div>
  )
}

export default App
