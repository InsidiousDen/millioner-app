import React, { useState } from 'react'
import cn from 'classnames'

import styles from './Game.module.scss'
import questions from '../../constants/questions.json'
import Score from '../../components/Score/Score'
import Answer from '../../components/Answer/Answer'
import SidebarToggler from '../../components/SidebarToggler/SidebarToggler'

const Game = ({ setGameStarted, setGameFinished, setReward }) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [showRewards, setShowRewards] = useState(false)

  const currentQuestion = questions[questionNumber]
  const prevQuestionReward = questionNumber
    ? questions[questionNumber - 1].reward
    : '$0'

  const finishGame = (reward = prevQuestionReward) => {
    setReward(reward)
    setGameStarted(false)
    setGameFinished(true)
  }
  const switchToNextQuestion = () => {
    if (questionNumber === questions.length - 1) {
      finishGame(currentQuestion.reward)
    } else {
      setQuestionNumber((prev) => prev + 1)
    }
  }

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{currentQuestion.question}</h2>
        <div className={styles.answers}>
          {currentQuestion.answers.map((item) => {
            return (
              <Answer
                key={item.label}
                label={item.label}
                text={item.answer}
                currentQuestion={currentQuestion}
                switchToNextQuestion={switchToNextQuestion}
                finishGame={finishGame}
              />
            )
          })}
        </div>
      </div>
      <div className={cn(showRewards && styles.active, styles.sidebar)}>
        <aside className={styles.reward}>
          <Score
            rewards={questions.map((item) => item.reward).reverse()}
            questionNumber={questionNumber}
          />
        </aside>
      </div>
      <SidebarToggler setShowRewards={setShowRewards} />
    </section>
  )
}

export default Game
