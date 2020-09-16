import client from './client';

const endpoint = ['chats/'];
const getChatsForListingByUser = async (listingId, buyerId, sellerId) => {
  let response = await client.get(endpoint[0]+buyerId+"/"+sellerId+"/"+listingId);
  return response;
}
const sendChatMessage = async (data) =>{
    let form = new FormData();
    form.append("chatMessage", data.message);
    form.append("fromUser", data.fromUser);
    form.append("toUser", data.toUser);
    form.append("listing", data.listing);
    data.images.forEach((image, index) => 
        form.append("images",{
            name: image.name,
            type: image.type,
            uri: image.uri
        }));
    let response = {}
    try {
      response = await client.post(endpoint[0],form);
    //   console.log(response)   
    } catch (error) {
        // console.log(error);
    }
    return response;
}

export default {
    sendChatMessage,
    getChatsForListingByUser,
}