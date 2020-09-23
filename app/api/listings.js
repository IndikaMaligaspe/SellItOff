import client from './client';

const endpoint = ["/listings","/my/listings"];

const getListings = () => client.get(endpoint[0]);

const getMyListings = async (userId)=>{
    const data = {
        "user":
            {
                "userId":userId
            }
    };   
    const result = await client.get(endpoint[1], data);
    // console.log(result.data);
    if (!result.ok)return;
    return result;
}

const postlisting = (data, OnUploadProgress) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("categoryId", data.category._id);
    formData.append("description",data.description);

    data.imageList.forEach((image, index) => 
        formData.append("images",{
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        }));

    if (data.location) 
        formData.append("location", JSON.stringify(data.location));   
    
    // console.log(formData);
    return client.post(endpoint[0], formData,{
                        onUploadProgress: (progress)=> 
                        OnUploadProgress(progress.loaded / progress.total)});
}
export default {
    getListings, 
    postlisting,
    getMyListings,
};
