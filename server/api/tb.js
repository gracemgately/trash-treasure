const router = require('express').Router();
const ShopifyBuy = require('shopify-buy')
require('../../secrets.js')
//TBD --> import info from dropshop company
module.exports = router;

var shopClient = ShopifyBuy.buildClient({
  accessToken: API_KEY,
  domain: 'ef4a17b9.ngrok.io',
  appId: '6'
});

router.get('/', (req, res, next) => {
    shopClient.fetchProduct('8569911558')
    .then(product => {
        console.log(product);
        res.status(200).json('ALL TB HERE')
    })
    .catch(err => {
        console.error(err)
        res.status(500).json('PRODUCT NOT FOUND')
    })

})