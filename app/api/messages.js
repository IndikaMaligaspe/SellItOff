import client from './client';

const endpoint = ['messages/']

const getMessages = async ()=>  client.get(endpoint[0]);

const deleteMessage  = async (_id)=> {
    console.log(_id);

    let response =  await client.delete(endpoint[0]+"/"+_id);
    // console.log(response);
    return response;
}



export default {
    getMessages,
    deleteMessage,
}