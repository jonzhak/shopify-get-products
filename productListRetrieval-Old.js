// import { request, gql } from "graphql-request";
const { request, gql, GraphQLClient } = require("graphql-request");

const query1 = gql`
  {
    product(id: "gid://shopify/Product/6718176329924") {
      id
      legacyResourceId
      title
      collections(first: 5) {
        edges {
          node {
            description
            handle
          }
        }
      }
    }
  }
`;

const query2 = gql`
  {
    collections(first: 250) {
      edges {
        node {
          id
          handle
          title
          description
          productsCount
        }
      }
    }
  }
`;

const getCollections = () => {
  const query4 = gql`
    {
      products(first: 5) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  return request(
    "https://0f6b58da9331414de7ed1d948c67ac35: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@fat-cat-studio.myshopify.com/admin/api/2021-04/graphql.json",
    query4
  ).then((data) => console.log(JSON.stringify(data)));
};
getCollections();

const getProducts = (handle) => {
  const query3 = gql`
    {
      collectionByHandle(handle: "${handle}") {
        products(first: 5) {
          edges { 
            node {
              id
              title
              description
              tags
            }
          }
        }
      }
    }
  `;

  return request(
    "https://4d6b2a9b76b015bcda0315a8c3d820be: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@monte-carlo-designs.myshopify.com/admin/api/2021-04/graphql.json",
    query3
  ).then((data) => console.log(JSON.stringify(data)));
};

/*

{"collections":
{
    "edges":
[
{"node":{"id":"gid://shopify/Collection/270126776516","handle":"frontpage","title":"Home page","description":"","productsCount":1}},
{"node":{"id":"gid://shopify/Collection/270207418564","handle":"american-watches","title":"american watches","description":"","productsCount":6}},
{"node":{"id":"gid://shopify/Collection/270207484100","handle":"european-watches","title":"european watches","description":"","productsCount":2}}
]
}
}

const arr = data.collections.edges.map((item) => item.node.handle);
    arr.forEach((element) => {
      getProducts(element);
    });
*/

///hoow to retrieve product info https://shopify.dev/api/storefront/getting-started#requirements
