import React, { useState } from 'react'
import cn from 'classnames'

import styles from './Answer.module.scss'

const Answer = ({
  label,
  text,
  currentQuestion,
  switchToNextQuestion,
  finishGame,
}) => {
  const [isSelected, setSelected] = useState(false)
  const [isCorrect, setCorreсt] = useState(false)
  const [isWrong, setWrong] = useState(false)
  const timeout = 1000
  const handleCorrectAnswer = () => {
    setCorreсt(true)

    setTimeout(() => {
      switchToNextQuestion()
      setCorreсt(false)
    }, timeout)
  }

  const handleWrongAnswer = () => {
    setWrong(true)

    setTimeout(() => {
      finishGame()
    }, timeout)
  }

  const handleClick = (e) => {
    setSelected(true)
    e.persist()

    setTimeout(() => {
      setSelected(false)
      if (currentQuestion.correct.includes(label)) {
        handleCorrectAnswer()
      } else {
        handleWrongAnswer()
      }
    }, timeout)
  }

  let state = ''

  switch (true) {
    case isSelected:
      state = 'selected'
      break
    case isCorrect:
      state = 'correct'
      break
    case isWrong:
      state = 'wrong'
      break
    default:
      state = ''
  }

  return (
    <button
      type="button"
      className={cn(styles.root, styles[`root--${state}`])}
      onClick={handleClick}
    >
      <svg
        className={styles.hex}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 56"
      >
        <path d="M303 28h17M0 28h17" />
        <path
          d="M32.818 5.316A11.5 11.5 0 0142.175.5h235.65a11.5 11.5 0 019.358 
          4.816L303.386 28l-16.203 22.684a11.5 11.5 0 01-9.358 
          4.816H42.175a11.5 11.5 0 01-9.357-4.816L16.615 28 32.817 5.316z"
        />
      </svg>
      <div className={styles.wrapper}>
        <div className={styles.label}>{label}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </button>
  )
}

export default Answer
