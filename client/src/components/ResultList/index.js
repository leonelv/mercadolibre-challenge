import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import Card from '../ResultCard'
import styles from './styles.module.scss'
class ResultList extends Component {
  render() {
    return (
      <div className={styles.results}>
        {this.props.results.map(({ id, title, price, picture, condition, free_shipping }) => (
          <Card
            key={uuid()}
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
  results: PropTypes.array.isRequired
}

export default ResultList
