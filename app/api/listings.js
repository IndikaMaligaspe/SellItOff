import client from './client';

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postlisting = (data, OnUploadProgress) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("categoryId", data.category.value);
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
    return client.post(endpoint, formData,{
                        onUploadProgress: (progress)=> 
                            OnUploadProgress(progress.loaded / progress.total)});
}
export default {
    getListings, 
    postlisting,
};
