import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

const Breadcrumb = ({ categories }) => (
  <div className={styles.breadcrumb}>
    {categories.map(cat => (
      <span className={styles.crumb} key={uuid()}>
        <Link to="#">{cat}</Link>
      </span>
    ))}
  </div>
)

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Breadcrumb
