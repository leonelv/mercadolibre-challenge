import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../ResultCard'
import styles from './styles.module.scss'
class ResultList extends Component {
  render() {
    return (
      <div className={styles.results}>
        {this.props.results.map(({ id, title, price, picture, condition, free_shipping }) => (
          <Card
            id={id}
            title={title}
            price={`${price.amount}${price.decimals ? '.' + price.decimals : ''}`}
            currency={price.currency}
            image={picture}
            includesShipping={free_shipping}
            condition={condition}
          />
        ))}
      </div>
    )
  }
}

ResultList.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
  condition: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired
}

export default ResultList
