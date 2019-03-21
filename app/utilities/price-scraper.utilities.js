const nightmare = require('nightmare')

const reducer = (accumulator, productLink) => {
  return accumulator.then(function(results) {
    const siteMap = getSiteMap(productLink)

    return nightmare
      .goto(productLink)
      .wait(siteMap.productPage.elements.productName)
      .wait(siteMap.productPage.elements.productPrice)
      .wait(siteMap.productPage.images.main)
      .evaluate(selectors => {
        return {
          productName: document.querySelector(selectors.productName).innerHTML,
          productPrice: document.querySelector(selectors.productPrice).innerHTML,
          productImage: document.querySelector(selectors.productImage).src
        }
      }, {
        productName: siteMap.productPage.elements.productName,
        productPrice: siteMap.productPage.elements.productPrice,
        productImage: siteMap.productPage.images.main
      })
      .then(productDetails => {
        results.push(productDetails)

        return results
      })
      .catch(error => {
        console.error(error)
      })
  })
}

module.exports = {
  reducer
}
