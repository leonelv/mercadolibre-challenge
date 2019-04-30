import React from 'react'
import styles from './styles.module.scss'

const Button = ({ children }) => <button className={styles.btn}>{children}</button>

export default Button
