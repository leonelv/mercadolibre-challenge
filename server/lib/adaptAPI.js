const author = {
  name: 'Leonel Alexander',
  lastname: 'Vieyra'
}

function getPrice(price, currency_id) {
  if (price && currency_id) {
    let priceObj = { currency: currency_id }
    let [amount, decimals] = price.toString().split('.')
    priceObj.amount = parseInt(amount)
    priceObj.decimals = parseInt(decimals) || 0
    return priceObj
  }
  return {}
}

module.exports = {
  adaptItems(data, description) {
    const { id, title, price, currency_id, condition, shipping } = data
    if (id && title && price && currency_id && condition && shipping) {
      return {
        author,
        item: {
          id,
          title,
          price: getPrice(price, currency_id),
          condition,
          free_shipping: shipping.free_shipping,
          description,
          picture: data.pictures[0].secure_url
        }
      }
    }
    return {}
  },
  adaptSearchResults(data) {
    return {
      author,
      categories:
        data.filters[0] && data.filters[0].values && data.filters[0].values[0] && data.filters[0].values[0].path_from_root
          ? data.filters[0].values[0].path_from_root.map(({ name }) => name)
          : [],
      items: data.results.slice(0, 4).map(({ id, title, price, currency_id, thumbnail, condition, shipping: { free_shipping }, address }) => ({
        id,
        title,
        price: getPrice(price, currency_id),
        picture: thumbnail,
        condition,
        free_shipping,
        address: address.state_name
      }))
    }
  }
}
