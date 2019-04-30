import React, { useState } from 'react'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'

import styles from './styles.module.scss'
function SearchBox(props) {
  const searchValue = queryString.parse(window.location.search)
  const [inputValue, setValue] = useState(searchValue.search || '')

  const handleValueChange = ({ target: { value } }) => setValue(value)
  const handleSearch = () => {
    props.history.push(`/items?search=${inputValue}`)
  }
  const unlistenRouteChange = props.history.listen((location, action) => {
    const searchValue = queryString.parse(window.location.search)
    setValue(searchValue.search || '')
  })

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.box}>
      <input type="text" onChange={handleValueChange} placeholder="Nunca dejes de buscar" value={inputValue} onKeyPress={handleKeyPress} />
      <div className={styles.searchTrigger} onClick={handleSearch} />
    </div>
  )
}

export default withRouter(SearchBox)
