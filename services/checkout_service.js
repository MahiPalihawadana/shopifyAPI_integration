const fetch = require("node-fetch");
const config = require("../config/default.json");
let retrieveData  ;





//create checkout

exports.createCheckout = async (lineItems) => { 
  try {
     const response = await fetch(config.shopifyEndpoint, {
          method: "POST",
          headers: config.shopifyHeader,
          body: JSON.stringify({
              query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
                checkoutCreate(input: $input) {
                  checkout {
                    id
                    webUrl
                    completedAt
                    createdAt
                    currencyCode 
                    
                    email 
                    note
                    orderStatusUrl
                    ready
                    requiresShipping
                    taxExempt
                    taxesIncluded
                    updatedAt
                  }
                  checkoutUserErrors {
                    code
                    field
                    message
                  }
                }
              }
              `,variables: {
                input:{
                  allowPartialAddresses:false,
                  lineItems:lineItems
                  
                }

              }
          }),
      })

      retrieveData = await response.json();
      console.log("54 "+retrieveData);
      return retrieveData;

  } catch (e) {
    console.log(e);
      throw Error("Error while retrieving collections");
  }
};

//"Z2lkOi8vc2hvcGlmeS9DaGVja291dC84ODMxZWY5OGRkOWI3Mzk1MjczYmRjYWM1ZGE4NzBkOD9rZXk9OGIyZGRhNDk1NzYwZjYzNzQxOTQ1NDVjYjNkNjdhNzQ="

//Update email
exports.updateEmail = async (emailInput) => { 
  try {
     const response = await fetch(config.shopifyEndpoint, {
          method: "POST",
          headers: config.shopifyHeader,
          body: JSON.stringify({
              query: `mutation checkoutEmailUpdateV2($checkoutId: ID!, $email: String!) {
                checkoutEmailUpdateV2(checkoutId: $checkoutId, email: $email) {
                  checkout {
                    id
                    webUrl
                    completedAt
                    createdAt
                    currencyCode 
                    email 
                    
                    note
                    orderStatusUrl
                    ready
                    requiresShipping
                    taxExempt
                    taxesIncluded
                    updatedAt

                  }
                  checkoutUserErrors {
                    code
                    field
                    message
                  }
                }
              }
              
              `,variables: {
                
                  checkoutId:emailInput.id,
                  email:emailInput.email
                  
                }
          }),
      })
      retrieveData = await response.json();
      console.log("54 "+retrieveData);
      return retrieveData;

  } catch (e) {
    console.log(e);
      throw Error("Error while retrieving collections");
  }
};

//update Shipping address

exports.updateShippingaddress = async () => { 
  try {
      const response = await fetch(config.shopifyEndpoint, {
          method: "POST",
          headers: config.shopifyHeader,
          body: JSON.stringify({
              query: `mutation checkoutShippingAddressUpdateV2($shippingAddress: MailingAddressInput!, $checkoutId: ID!) {
                checkoutShippingAddressUpdateV2(shippingAddress: $shippingAddress, checkoutId: $checkoutId) {
                  checkout {
                    id
                    webUrl
                    completedAt
                    createdAt
                    currencyCode 
                    email 
                    availableShippingRates{
                      
                        
                          ready
                          shippingRates{
                            handle
                            priceV2{
                              amount
                              currencyCode
                            }
                            title 
                          }
                        
                      
                    }
                    note
                    orderStatusUrl
                    ready
                    requiresShipping
                    taxExempt
                    taxesIncluded
                    updatedAt
                  }
                  checkoutUserErrors {
                    code
                    field
                    message
                  }
                }
              }
              
              
              `,variables: {
                
                shippingAddress: {
                  address1:"konvinna udawela",
                  address2 :"opanayaka",
                  city:"Balangoda",
                  company:"Atlink communication",
                  country:"Sri Lanka",
                  firstName:"yasan",
                  lastName:"madhuranga",
                  phone:"0715285867",
                  province:"sabaragamuwa",
                  zip:"70100"
                },
                checkoutId: "Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wNGIzMmIxZWQ3YmM5ZGM5N2MyYzYxODhjZDI1OGEyMz9rZXk9ZDdkNWM1ZTFlYjg5MDk3NmU2Y2I2M2RlNGJlYmViM2E="
                  
                }
          }),
      })

      retrieveData = await response.json();
      console.log("54 "+retrieveData);
      return retrieveData;

  } catch (e) {
    console.log(e);
      throw Error("Error while retrieving collections");
  }
};

//update shipping rates

// wada na
exports.updateShippingrate = async () => { 
  try {
    const response = await fetch(config.shopifyEndpoint, {
        method: "POST",
        headers: config.shopifyHeader,
        body: JSON.stringify({
            query: `mutation checkoutShippingLineUpdate($checkoutId: ID!, $shippingRateHandle: String!) {
              checkoutShippingLineUpdate(checkoutId: $checkoutId, shippingRateHandle: $shippingRateHandle) {
                checkout {
                  id
                }
                checkoutUserErrors {
                  code
                  field
                  message
                }
              }
            }
            `,variables: {
                checkoutId: "Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wNGIzMmIxZWQ3YmM5ZGM5N2MyYzYxODhjZDI1OGEyMz9rZXk9ZDdkNWM1ZTFlYjg5MDk3NmU2Y2I2M2RlNGJlYmViM2E=",
                shippingRateHandle: "shopify-Standard-500.00"
        
              }
        }),
    })

    retrieveData = await response.json();
    console.log("54 "+retrieveData);
    return retrieveData;

} catch (e) {
  console.log(e);
    throw Error("Error while retrieving collections");
}
};


















