

const getFromServer = () => {
    global._serverInvoked = true
    return { 'available': ['jesus', 'odin', 'zeus', 'antares', 'juan'] }
} 

// Create client
const cache = require('simple-cache-client')
const server = process.env.CACHE_URL
cache.connect2(server)

// Get Personajes 
module.exports.impl = async () => {

    // use from cache if is available, either go to server
    const personajes = await cache.get('personajes') || await getFromServer()
    
    // if its truthy , store it
    personajes && await cache.set('personajes', personajes)
    
    return { statusCode: 200, body: personajes }
}

