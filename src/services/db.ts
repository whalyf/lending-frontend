import axios from 'axios'

const db = axios.create({
    baseURL: 'http://my-json-server.typicode.com/whalyf/lending-frontend/'
})

export default db;