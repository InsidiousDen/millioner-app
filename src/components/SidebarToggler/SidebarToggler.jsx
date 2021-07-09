import React, { useState } from 'react'
import cn from 'classnames'

import styles from './SidebarToggler.module.scss'

const SidebarToggler = ({ setShowRewards }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
    setShowRewards((prev) => !prev)
  }

  return (
    <button
      type="button"
      className={cn(open && styles.open, styles.root)}
      onClick={handleClick}
    >
      <span />
    </button>
  )
}

export default SidebarToggler
