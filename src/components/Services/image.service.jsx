//     function getImage(request, page) {
//         return fetch (`https://pixabay.com/api/?q=${request}&page=${page}&key=33196746-3c53ba3d329df844fee4c0829&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => {
//             if(response.ok) {
//                 return response.json();
//             }
//             return Promise.reject(new Error(`Нет фото по запросу ${request}`));
//         });
//     } 
// const api = {getImage,};
// export default api;





import axios from "axios";

 const imageAPI = async (request, page, perPage) => {
    const responce = axios.get(`https://pixabay.com/api/?q=${request}s&page=${page}&key=33196746-3c53ba3d329df844fee4c0829&image_type=photo&orientation=horizontal&per_page=${perPage}`)

    return responce.data;
};
         
export default imageAPI;

