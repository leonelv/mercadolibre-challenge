import React from 'react'
import styles from './styles.module.scss'

const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Container
