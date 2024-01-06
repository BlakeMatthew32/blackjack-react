
import Header from "./components/header"
import { useState, useRef } from "react"
import Playing from "./pages/playing/playing"
import Betting from "./pages/betting/betting"

// custom hooks
import useDeck from "./hooks/useDeck"

function App() {

  const [ playersBet, setPlayersBet ] = useState(0)
  const [ bankAmount, setBankAmount ] = useState(1000)
  const [ playing, setPlaying ] = useState(false)

  const deckIdRef = useRef("")
  const cardsRemainingRef = useRef(0)

  const { value: deck } = useDeck(deckIdRef.current, {}, [playersBet])

  if (deck) {
    deckIdRef.current = deck.deck_id
    cardsRemainingRef.current = deck.remaining
  }

  console.log(deck)

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
      <Header cardsRemaining={cardsRemainingRef.current} />
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
