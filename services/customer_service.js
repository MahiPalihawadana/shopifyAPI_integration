const e = require("express");
const fetch = require("node-fetch");
const config = require("../config/default.json");
let retrivedData;

exports.createNewCustomer = async (customer) => {
  try {
    await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `mutation customerCreate($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            customerUserErrors {
              code
              field
              message
            }
            customer {
              id
            }
          }
        }`,
        variables: {
          input: {
            "firstName": customer.firstName,
            "lastName": customer.lastName,
            "email": customer.email,
            "password": customer.password,
          },
        },
      }),
    })
    retrieveData = await response.json();
    message = retrieveData.errors[0].message;
    {  
    if (message == null) {
      return retrivedData;
    }
    else {
      throw Error(message);
    }
  }

  } catch (e) {
    console.log(e);
    throw Error(e);
  }
};

// exports.createNewCustomer = async () => {

//   try {
//     const response = await fetch(config.shopifyEndpoint, {
//       method: "POST",
//       headers: config.shopifyHeader,
//       body: JSON.stringify({
//         query: `mutation customerCreate($input: CustomerCreateInput!) {
//           customerCreate(input: $input) {
//             customerUserErrors {
//               code
//               field
//               message
//             }
//             customer {
//               id
//             }
//           }
//         }`,
//         variables: {
//           input: {
//             "firstName": "sithumini",
//             "lastName": "gamage",
//             "email": "sithugamage1997@gmail.com",
//             "password": "sithu@123",
//           },
//         },
//       }),
//     })
//     retrieveData = await response.json();
//     message = retrieveData.errors[0].message;
//     {  
//     if (message == null) {
//       return retrivedData;
//     }
//     else {
//       throw Error(message);
//     }
//   }

//   } catch (e) {
//     console.log(e);
//     throw Error(e);
//   }
// };

exports.createCustomerAccessToken = async (customer) => {
  try {
    const response = await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
          customerAccessTokenCreate(input: $input) {
            customerAccessToken {
              accessToken
              expiresAt
            }
            customerUserErrors {
              code
              field
              message
            }
          }
        }`,
        variables: {
          input: {
            "email": customer.email,
            "password": customer.password,
          },

        },
      }),
    })
    retrieveData = await response.json();
    message = retrieveData.errors[0].message;
    {
      
  
    if (message == null) {
      return retrivedData;
    }
    else {
      throw Error(message);
    }
  }

  } catch (e) {
    console.log(e);
    throw Error(e);
  }
};

exports.getCustomerDetails = async () => {

  try {
    await fetch(config.shopifyEndpoint, {
      method: "get",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `query(customerAccessToken: $customerAccessToken!) {
          customer{
           firstname
           id
         }
            customerUserErrors {
              code
              field
              message
            }
          }
        }`,
        variables: {
          input: {
            "customerAccessToken": "3debf6f57813e3bbaa8a0cc3a2df4085",

          },
        },
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        retrivedData = data;
      });


    console.log(retrivedData);
    return retrivedData;


  } catch (e) {
    console.log(e);
    throw Error("Error ");
  }
};

exports.createCustomerAddress = async (customer) => {
  try {
    await fetch(config.shopifyEndpoint, {
      method: "POST",
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
          customerAddress {
            id
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }`,
        variables: {
          input: {
            "customerAccessToken": customer.customerAccessToken,
            "address": customer.address,
          }
        },
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        retrivedData = data;
      });

    console.log(retrivedData);
    return retrivedData;

  } catch (e) {
    throw Error("Error ");
  }
};

exports.updateCustomerAddress = async (customer) => {
  try {
    await fetch(config.shopifyEndpoint, {
      method: POST,
      headers: config.shopifyHeader,
      body: JSON.stringify({
        query: `mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
          customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
            customerAddress {
              id
            }
            customerUserErrors {
              code
              field
              message
            }
          }
        }`,
        variables: {
          input: {
            "customerAccessToken": customer.customerAccessToken,
            "id": customer.id,
            "address": customer.address,

          },
        },
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        retrivedData = data;
      });

    console.log(retrivedData);
    return retrivedData;

  } catch (e) {

    throw Error("Error ");

  }
};
