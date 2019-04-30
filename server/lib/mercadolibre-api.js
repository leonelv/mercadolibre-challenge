const fetch = require('node-fetch')
const API_BASEURL = 'https://api.mercadolibre.com'

module.exports = {
  async searchQuery(query) {
    const response = await fetch(`${API_BASEURL}/sites/MLA/search?q=${query.startsWith(':') ? query : ':' + query}`)
    return await response.json()
  },
  async getItemData(id) {
    const response = await fetch(`${API_BASEURL}/items/${id}`)
    return await response.json()
  },
  async getItemDescription(id) {
    const response = await fetch(`${API_BASEURL}/items/${id}/description`)
    return await response.json()
  }
}
