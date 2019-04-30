import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import SearchBox from '../SearchBox'

class Header extends Component {
  render() {
    return (
      <div className={styles.bar}>
        <div className={styles.container}>
          <Link to="/">
            <img src="/img/Logo_ML.png" alt="" />
          </Link>
          <SearchBox />
        </div>
      </div>
    )
  }
}
export default Header
