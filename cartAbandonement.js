"use strict";
const axios = require("axios");

async function getAbandonedCart(
  storeMyShopify,
  apiVersion,
  storeAPIkey,
  storePassword,
  created_at_min
) {
  const url_checkouts = `https://${storeAPIkey}:${storePassword}@${storeMyShopify}/admin/api/${apiVersion}/checkouts.json`;

  return axios
    .get(url_checkouts, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("@@@@@@@@@@ERROR at getAbandonedCart:   ", error);
      return false;
    });
}

exports.getAbandonedCart = getAbandonedCart;
module.exports = exports;
