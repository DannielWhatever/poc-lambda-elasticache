
const fnImplementation = require('./fnImplementation')
exports.handler = async (event) => {
    
    const resp = await fnImplementation.impl()
    return {
        statusCode: resp.statusCode,
        body: resp.body,
    }
}
