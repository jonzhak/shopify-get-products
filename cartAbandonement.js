const request = require("request");

const getAbandonedCart = (storeAPIkey, storePassword, storeMyShopify) => {
  return new Promise(function (resolve, reject) {
    var options = {
      method: "GET",
      url: `https://${storeAPIkey}:${storePassword}@${storeMyShopify}/admin/api/2021-04/checkouts.json`,
      headers: {
        "Content-Type": "application/json",
        //"X-Shopify-Access-Token": accessToken,
      },
    };
    request(options, function (error, _, body) {
      if (error) {
        console.log("error occured", error);
        return "";
      }
      var jsonBody = JSON.parse(body);
      resolve(jsonBody);
    });
  });
};
exports.getAbandonedCart = getAbandonedCart;
module.exports = exports;
