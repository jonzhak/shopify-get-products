"use strict";
const axios = require("axios");

//this initialize func to be called just once for each store when they first buy saletastic
async function shopifyStoreDiscountsInitialize(
  storeMyShopify,
  apiVersion,
  storeAPIkey,
  storePassword,
  discount_percent
) {
  const data_price_rule = {
    price_rule: {
      title: "saletastic-cart-abd-discount",
      target_type: "line_item",
      target_selection: "all",
      allocation_method: "across",
      value_type: "percentage",
      value: discount_percent,
      customer_selection: "all",
      once_per_customer: true,
      starts_at: "2021-07-09",
      usage_limit: "1",
    },
  };
  const session_url_price_rule = `https://${storeMyShopify}/admin/api/${apiVersion}/price_rules.json`;

  return axios
    .post(session_url_price_rule, JSON.stringify(data_price_rule), {
      auth: {
        username: storeAPIkey,
        password: storePassword,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log("resposne is (price rule create):   ", response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("@@@@@@@@@@ERROR AT PRICE RULE CREATE:   ", error);
      return false;
    });
}

async function shopifyDiscountCreate(
  storeMyShopify,
  apiVersion,
  storeAPIkey,
  storePassword,
  price_rule_id,
  random_string
) {
  const data_discount = {
    discount_code: {
      code: random_string,
    },
  };

  const session_urldiscount = `https://${storeMyShopify}/admin/api/${apiVersion}/price_rules/${price_rule_id}/discount_codes.json`;

  return axios
    .post(session_urldiscount, JSON.stringify(data_discount), {
      auth: {
        username: storeAPIkey,
        password: storePassword,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      const discounted_url = `http://${storeMyShopify}/discount/${random_string}`;
      console.log("test link is: ", discounted_url);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("@@@@@@@@@@ERROR AT DISCOUNT CREATE:   ", error);
      return false;
    });
}

exports.shopifyDiscountCreate = shopifyDiscountCreate;
exports.shopifyStoreDiscountsInitialize = shopifyStoreDiscountsInitialize;
module.exports = exports;
