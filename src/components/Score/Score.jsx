import React from 'react'

import cn from 'classnames'
import styles from './Score.module.scss'

const Score = ({ rewards, questionNumber }) => {
  const rewardsLength = rewards.length - 1

  return (
    <ul className={styles.root}>
      {rewards.map((reward, i) => {
        const reversedIndex = rewardsLength - i
        let state = ''

        if (reversedIndex === questionNumber) {
          state = 'current'
        } else if (reversedIndex < questionNumber) {
          state = 'previous'
        }

        return (
          <li
            className={cn(styles.item, styles[`item--${state}`])}
            key={reward}
          >
            <svg
              className={styles.hex}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 32"
            >
              <path d="M41 16H0M320 16h-41" />
              <path
                d="M53.53 3.704A11.5 11.5 0 0161.494.5h197.012c2.968 
                  0 5.822 1.148 7.964 3.204L279.278 16 266.47 28.296a11.502 
                  11.502 0 01-7.964 3.204H61.494a11.5 11.5 0 
                  01-7.964-3.204L40.722 16 53.53 3.704z"
              />
            </svg>
            <div className={styles.text}>{reward}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default Score
