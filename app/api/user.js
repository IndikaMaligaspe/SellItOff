import client from './client'

const endpoint = ['/users','/user','/messages']

const register =  (userinfo) => {
    // console.log(userinfo);
    const formData = new FormData();
    formData.append("name",userinfo.name);
    formData.append("email",userinfo.email);
    formData.append("password",userinfo.password);
    userinfo.imageList.forEach((image, index) => 
        formData.append("images",{
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        }));

    return client.post(endpoint[0], formData);
}

const getUser = async (id) => {
    const response = await client.get(endpoint[1]+'/'+id);
    return response;
}

const userMessage = async (message, listingId) => {
    let response = await client.post(endpoint[2], {message, listingId});
    return response;
}


export default {
    register,
    getUser,
    userMessage,
}