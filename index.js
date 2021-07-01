const getAbandonedCart = require("./cartAbandonement").getAbandonedCart;
const {
  retireveCollections,
  createCheckout,
  queryProductVariants,
  retireveProducts,
  getProductsByCollectionHandle,
  retireveVariantsOfProduct,
} = require("./storefrontAPI");

const storeAPIkey = "0f6b58da9331414de7ed1d948c67ac35";
const storePassword = "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";
const accessToken = "0386d977a264448a1b62c295ac542a0d";
const storeMyShopify = "fat-cat-studio.myshopify.com";

//const { encode, decode } = require("shopify-gid");

//note we cheated heree get productvariant kept throwig syntax error so we used shopify graphql app to do this query

/*
getAbandonedCart(
  storeAPIkey,
  storePassword,
  storeMyShopify
).then((data) => console.log(JSON.stringify(data)));
*/
/*
const encodedVal = encode("Product", variantIdShort, {
  accessToken: accessToken,
});
*/

//console.log(encodedVal);
const handle = "winter";
const productID = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3NzM1MDczOTE2Nzk=";
const variantID =
  "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDEyMTM0MTg3MDI3MQ==";

//retireveCollections(storeMyShopify, accessToken);
//getProductsByCollectionHandle(storeMyShopify, accessToken, handle);
//retireveVariantsOfProduct(storeMyShopify, accessToken, productID);
createCheckout(storeMyShopify, accessToken, variantID);
