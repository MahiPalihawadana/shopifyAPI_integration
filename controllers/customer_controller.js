const customerService = require('../services/customer_service');
exports.createNewCustomer = async function (req, res) {
    let customer = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const result = await customerService.createNewCustomer(customer);
        return res.status(200).json({
            status: {
                code: 200,
                name: 'Success',
                message: 'Successful'
            },
            payload: result,


        });
    }
    catch (e) {
        return res.status(500).json({
            status: {
                code: 500,
                name: 'Error',
                message: e.message


            },
            payload: null
        });
    }
}

exports.createCustomerAccessToken = async function (req, res) {
    let customer = {
        email: req.body.email,
        password: req.body.password
    };
    try {
        const result = await customerService.createCustomerAccessToken(customer);
        return res.status(200).json({
            status: {
                code: 200,
                name: 'Success',
                message: 'Successful'
            },
            payload: result

        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            status: {
                code: 500,
                name: 'Error',
                message: e.message
                // error: console.log(Error),
                // message: console.error()

            },
            payload: null
        });
    }
}

exports.getCustomerDetails = async function (req, res) {
    let customer = {
        email: req.body.email,
        password: req.body.password
    };
    try {
        const result = await customerService.getCustomerDetails(customer);
        return res.status(200).json({
            status: {
                code: 200,
                name: 'Success',
                message: 'Successful'
            },
            payload: result

        });
    }
    catch (e) {
        return res.status(500).json({
            status: {
                code: 500,
                name: 'Internal_Server_Error',
                message: 'Internal_Server_Error',


            },
            payload: null
        });
    }
}




exports.createCustomerAddress = async function (req, res) {
    let customer = {
        customerAccessToken: req.body.customerAccessToken,
        address: req.body.address,

    };
    try {
        const result = await customerService.createCustomerAddress(customer);
        return res.status(200).json({
            status: {
                code: 200,
                name: 'Success',
                message: 'Successful'
            },
            payload: result
        });
    }
    catch (e) {
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

exports.updateCustomerAddress = async function (req, res) {
    let customer = {
        customerAccessToken: req.body.customerAccessToken,
        address: req.body.address,
        id: req.body.id,

    };
    try {
        const result = await customerService.updateCustomerAddress(customer);
        return res.status(200).json({
            status: {
                code: 200,
                name: 'Success',
                message: 'Successful'
            },
            payload: result
        });
    }
    catch (e) {
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
