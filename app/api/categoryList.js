import client from '../api/client'

const endpoint = 'categories';
const getCategoryList = () => client.get(endpoint);

export default{
    getCategoryList,
}