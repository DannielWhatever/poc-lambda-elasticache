
const fnImplementation = require('./fnImplementation')
exports.handler = async (event) => {
    
    const resp = await fnImplementation.getPersonajes()
    const response = {
        statusCode: resp.statusCode,
        body: resp.body,
    };
    return response;
};
