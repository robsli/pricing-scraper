const ikeaSiteMap = {
  header: {
    links: {
      login: '.login-item',
      ikeaFamily: '.topNavItems' // Not specific enough, so need to grab the first one
    }
  },
  ikeaFamilyDashboard: {
    containers: {
      mobileWallet: '#mobile-wallet'
    }
  },
  ikeaFamilyLoginPage: {
    buttons: {
      emailNext: '#gaLoginNextBtn',
      homeLogin: '#gaHomeLoginBtn',
      login: '#login'
    },
    inputs: {
      emailAddress: '#EmailAddressOrCardNumber',
      password: '#Password'
    }
  },
  productPage: {
    elements: {
      productName: '#name',
      productPrice: '#price1'
    },
    images: {
      main: '#productImg'
    }
  },
  storeName: 'IKEA'
}

module.exports = ikeaSiteMap
