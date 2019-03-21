const getSiteMap = (url) => {
  if (url.indexOf('ikea.com') > -1) {
    return require('../site-map/ikea.site-map')
  }

  if (url.indexOf('target.com') > -1) {
    return require('../site-map/target.site-map')
  }

  if (url.indexOf('wayfair') > -1) {
    return require('../site-map/wayfair.site-map')
  }

  return null
}

module.exports = {
  getSiteMap
}
