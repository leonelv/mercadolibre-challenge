import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const Breadcrumb = ({ categories }) => (
  <div className={styles.breadcrumb}>
    {categories.map(cat => (
      <span className={styles.crumb}>
        <Link to="#">{cat}</Link>
      </span>
    ))}
  </div>
)

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Breadcrumb
