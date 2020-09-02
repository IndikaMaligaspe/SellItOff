import client from './client'

const endpoint = '/users'

const register = (userinfo) => client.post(endpoint, userinfo);

export default {
    register,
}