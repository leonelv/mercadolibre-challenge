import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './styles.module.scss'
import Button from '../Button'
const Product = ({ item: { condition, soldQuantity, title, price, description, picture } }) => (
  <section className={styles.product}>
    <section className={styles.top}>
      <section className={styles.left}>
        <img src={picture} alt={title} />
      </section>
      <section className={styles.right}>
        <p className={styles.sold}>
          {condition === 'new' ? 'Nuevo' : 'Usado'} · {soldQuantity || 0} vendidos
        </p>
        <p className={styles.title}>{title || 'title'}</p>
        <p className={styles.price}>$ {price.amount}</p>
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
