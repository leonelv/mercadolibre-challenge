import React from 'react'
import Helmet from 'react-helmet'

function SEO() {
  const title = 'Mercado Libre'
  const metaDescription = 'La comunidad de compra y venta online más grande de América Latina.'
  const keywords = [
    'mercadolibre',
    'mercado',
    'libre',
    'comprar online',
    'comprar',
    'online',
    'buy',
    'online',
    'usado',
    'internet',
    'productos',
    'autos',
    'celulares',
    'casas'
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: 'es'
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: 'leonelv'
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat([])}
    />
  )
}

export default SEO
