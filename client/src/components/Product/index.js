import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './styles.module.scss'
import Button from '../Button'
const Product = ({ item: { condition, sold_quantity, title, price, description, picture } }) => (
  <section className={styles.product}>
    <section className={styles.top}>
      <section className={styles.left}>
        <img src={picture} alt={title} />
      </section>
      <section className={styles.right}>
        <p className={styles.sold}>
          {condition === 'new' ? 'Nuevo' : 'Usado'} · {sold_quantity || 0} vendidos
        </p>
        <p className={styles.title}>{title || 'title'}</p>
        <p className={styles.price}>
          $ {price.amount}
          {price.decimals ? '.' + price.decimals : ''}
        </p>
        <Button>Comprar</Button>
      </section>
    </section>

    <section className={styles.bottom}>
      <p className={styles.description}>Descripción del producto</p>
      <p className={styles.descriptionContent}>
        <ReactMarkdown source={description} />
      </p>
    </section>
  </section>
)

export default Product
