import client from './client';

const endpoint = ['messages/']

const getMessages = async ()=>  client.get(endpoint[0]);

export default {
    getMessages,
}