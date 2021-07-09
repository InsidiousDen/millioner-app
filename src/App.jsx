import React, { useState } from 'react'

import Game from './pages/Game/Game'
import Home from './pages/Home/Home'

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false)
  const [isGameFinished, setGameFinished] = useState(false)
  const [reward, setReward] = useState('')

  return (
    <main>
      {isGameStarted ? (
        <Game
          setGameFinished={setGameFinished}
          setReward={setReward}
          setGameStarted={setGameStarted}
        />
      ) : (
        <Home
          isGameFinished={isGameFinished}
          reward={reward}
          setGameStarted={setGameStarted}
        />
      )}
    </main>
  )
}

export default App
