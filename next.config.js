/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')

const domainsProvider = [
  'img.olx.com.br',
  'http2.mlstatic.com',
  'image1.mobiauto.com.br',
  'res.cloudinary.com',
]

module.exports = withPlugins([
  [
    {
      target: 'serverless',
      images: {
        domains: domainsProvider,
        deviceSizes: [480, 768, 992, 1280]
      }
    }
  ]
])
