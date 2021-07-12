const fetch = require("node-fetch");
const shopService = require('../services/shop_service');

exports.getShopinfo = (req, res) => {

  fetch("https://" + process.env.STORE_URL + "/api/2020-10/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN
    },
    body: JSON.stringify({
      query: `query {
            shop {
              name
              primaryDomain {
                url
                host
              }
              
            }
          }`
    })
  })
    .then(result => {
      return result.json();

    })
    .then(data => {
      console.log("data returned:\n", data);
      res.send(data);
    });

}