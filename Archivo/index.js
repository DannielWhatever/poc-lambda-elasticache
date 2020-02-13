
const fnImplementation = require('./fnImplementation')
exports.handler = async (event) => {
    
    const resp = await fnImplementation.getPersonajes()
    const response = {
        statusCode: 200,
        body: resp,
    };
    return response;
};
