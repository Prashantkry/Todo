import { MongoClient } from "mongodb";

// import MONGO_URL from '$app/environment'
const MONGO_URL = 'mongodb+srv://prashantkry89:Asdf213@sveltecrud.gbrj6kx.mongodb.net/'

const client = new MongoClient(MONGO_URL)

export function start_mongo() : Promise<MongoClient>{
    console.log('Starting mongo...')
    return client.connect() 
}

export default client.db()

 