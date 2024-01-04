
import Header from "./components/header"
import { useEffect, useState } from "react"
import Playing from "./pages/playing/playing"
import Betting from "./pages/betting/betting"

// custom hooks
import useFetch from "./hooks/useFetch"

const DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2"

function App() {

  const [ playersBet, setPlayersBet ] = useState(0)
  const [ bankAmount, setBankAmount ] = useState(1000)
  const [ playing, setPlaying ] = useState(false)

  const { loading, error, value: deck } = useFetch(DECK_API_URL)


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
