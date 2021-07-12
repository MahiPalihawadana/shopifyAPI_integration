const fetch = require("node-fetch");
const config = require("../config/default.json");
let retrieveData;

exports.getListofCollections = async () => {
  try {
    const response = await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `query {
                                  collections(first:50, query:"NOT lookbook*"){
                                   edges{
                                    node {
                                     id
                                     title
                                     description
                                     image{
                                     id
                                     originalSrc
                                     } 
                                   }
                                  }
                                 }
                           }`,
      }),
    })

        
     retrieveData = await response.json();
     console.log("40 "+retrieveData);
     return retrieveData;
 
  } catch (e) {
    console.log(e);
    throw Error("Error while retrieving collections");
  }
}; 








exports.getAllproductsOfcategory = async (category) => {



  try {
   const response = await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `query($numProducts: Int!, $query: String){

          collections(first:1,query:$query){
          edges{
            node{
              id
              title
              products(first:$numProducts){
                pageInfo{
                  hasNextPage
               }
                edges{
                  cursor
                  node{
                    id
                    title
                    description
                    productType 
                    tags

                    priceRange{
                      maxVariantPrice{
                        amount
                        currencyCode
                      }
                      minVariantPrice{
                        amount
                        currencyCode
                      }
                    }

                    images(first:1){
                      edges{
                        node{
                          id
                          originalSrc
                        }
                      }
                    }

                    options{
                      id
                      name
                      values
                     }

                  variants(first:50){
                    edges{
                        node{

                            id
                            availableForSale
                            currentlyNotInStock
                            quantityAvailable
                            title
                            priceV2{
                              amount
                              currencyCode
                            }
                            selectedOptions{
                                name
                                value 
                              }                      
                          }
                    }     
                  }

                  }
                }
              }
              
            }
          }
        }     
      }`,
        variables: {
          numProducts: 250,
          query: "title:" + category

        },
      }),
    })

    retrieveData = await response.json();
    console.log("40 "+retrieveData);
    return retrieveData;
  
  } catch (e) {
    console.log(e);
    throw Error("Error while retrieving collections");
  }
};



//"NOT look_book*"
exports.getCollections = async () => { 

  try {
    const response = await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `query {
          collections(first:50,query:"lookbook*"){
           edges{
            node {
             id
             title
             description
             image{
             id
             originalSrc
             }
             products(first:50){
              pageInfo{
                hasNextPage
             }
              edges{
                cursor
                node{
                  id
                  title
                  description
                  productType 
                  tags

                  priceRange{
                    maxVariantPrice{
                      amount
                      currencyCode
                    }
                    minVariantPrice{
                      amount
                      currencyCode
                    }
                  }

                  images(first:1){
                    edges{
                      node{
                        id
                        originalSrc
                      }
                    }
                  }

                  options{
                    id
                    name
                    values
                   }

                variants(first:50){
                  edges{
                      node{

                          id
                          availableForSale
                          currentlyNotInStock
                          quantityAvailable
                          title
                          
                          selectedOptions{
                              name
                              value 
                            }                      
                        }
                  }     
                }

                }
              }
            } 
           }
          }
         }
   }`,
        variables: {


        },
      }),
    })

    retrieveData = await response.json();
    console.log("40 "+retrieveData);
    return retrieveData;
      
  } catch (e) {
    throw Error("Error while retrieving collections");
  }



}






