import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Card = ({ id, image, title, includesShipping, condition, price, currency }) => (
  <div className={styles.padding}>
    <div className={styles.card}>
      <Link to={`/items/${id}`}>
        <img className={styles.thumbnail} src={image} alt={title} />
      </Link>
      <div className={styles.middle}>
        <Link to={`/items/${id}`}>
          <span>
            <p>
              {currency === 'USD' ? 'U$D' : '$'} {price}
            </p>{' '}
            {includesShipping ? <img src="/img/ic_shipping.png" alt="incluye envío" /> : null}
          </span>
          <p>{title}</p>
        </Link>
      </div>
      <div className={styles.last}>
        <p>{condition === 'used' ? 'Usado' : 'Nuevo'}</p>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  includesShipping: PropTypes.bool.isRequired
}

export default Card
