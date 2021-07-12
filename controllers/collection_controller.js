
const collectionService = require('../services/collection_service');

exports.getListofCollections = async function (req, res) {

  try {
    

    const result = await collectionService.getListofCollections();
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

exports.getAllproductsOfcategory = async function (req, res) {
  try {
    const result = await collectionService.getAllproductsOfcategory(req.params.category);

    return res.status(200).json({
      status: {
        code: 200,
        name: 'Success',
        message: 'Successfully_Retrived_Data'
      },
      payload: result
    });
  } catch (e) {

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

exports.getcollections = async function (req, res) {
  try {
    const result = await collectionService.getCollections();

    return res.status(200).json({
      status: {
        code: 200,
        name: 'Success',
        message: 'Successfully_Retrived_Data'
      },
      payload: result
    });


  } catch (e) {


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




// exports.getMoreproductsOftops = async function(req,res){
//   try{
//     const result = await collectionService.getMoreproductsOftops(req.params.cursor);

//     return res.status(200).json({
//       status: {
//           code: 200,
//           name: 'Success',
//           message: 'Successfully_Retrived_Data'
//       },
//       payload: result
//   });
//   }catch(e){

//     return res.status(500).json({
//       status: {
//           code: 500,
//           name: 'Internal_Server_Error',
//           message: 'Internal_Server_Error'
//       },
//       payload: null
//    });


//    } 
// }


































