<<<<<<< .mine
const collectionService = require('../services/checkout_service');||||||| .r8359
const collectionService = require('../services/collection_service');=======
const checkoutService = require('../services/checkout_service');

exports.createCheckout = async function (req, res) {

    try {
      
  
      const result = await checkoutService.createCheckout(req.body);
      console.log(result);
      return res.status(200).json({
        status: {
          code: 200,
          name: 'Success',
          message: 'Successfully_Retrived_Data'
        },
        payload: result
      });
  
    }
    catch (e) {
      console.log(e);
      return res.status(500).json({
        status: {
          code: 500,
          name: 'Internal_Server_Error',
          message: 'Internal_Server_Error'
        },
        payload: null
      });
  
  
    }
  
  }


  exports.updateEmail = async function (req, res) {
    const emailInput = {
        id:req.params.checkout_id,
        email:req.body.email
    }
    try {
      
  
      const result = await checkoutService.updateEmail(emailInput);
      console.log(result);
      return res.status(200).json({
        status: {
          code: 200,
          name: 'Success',
          message: 'Successfully_Retrived_Data'
        },
        payload: result
      });
  
    }
    catch (e) {
      console.log(e);
      return res.status(500).json({
        status: {
          code: 500,
          name: 'Internal_Server_Error',
          message: 'Internal_Server_Error'
        },
        payload: null
      });
  
  
    }
  
  }

  exports.updateShippingaddress = async function (req, res) {

    try {
      
  
      const result = await checkoutService.updateShippingaddress();
      console.log(result);
      return res.status(200).json({
        status: {
          code: 200,
          name: 'Success',
          message: 'Successfully_Retrived_Data'
        },
        payload: result
      });
  
    }
    catch (e) {
      console.log(e);
      return res.status(500).json({
        status: {
          code: 500,
          name: 'Internal_Server_Error',
          message: 'Internal_Server_Error'
        },
        payload: null
      });
  
  
    }
  
  }


  exports.updateShippingrate = async function (req, res) {

    try {
      
  
      const result = await checkoutService.updateShippingrate;
      console.log(result);
      return res.status(200).json({
        status: {
          code: 200,
          name: 'Success',
          message: 'Successfully_Retrived_Data'
        },
        payload: result
      });
  
    }
    catch (e) {
      console.log("from controller "+e);
      return res.status(500).json({
        status: {
          code: 500,
          name: 'Internal_Server_Error',
          message: 'Internal_Server_Error'
        },
        payload: null
      });
  
  
    }
  
  }>>>>>>> .r8434
