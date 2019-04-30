const router = require('express').Router()
const { getItemDescription, getItemData, searchQuery } = require('../lib/mercadolibre-api')
const { adaptSearchResults, adaptItems } = require('../lib/adaptAPI')

router.get('/items', async (req, res) => {
  try {
    const { q } = req.query

    if (q) {
      const results = await searchQuery(encodeURI(q))
      res.json(adaptSearchResults(results))
    } else {
      res.status(404).send('not found')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal Server Error')
  }
})

router.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (id) {
      const data = await getItemData(id)
      const description = await getItemDescription(id)
      res.json(adaptItems(data, description.plain_text))
    } else {
      res.status(404).send('not found')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
