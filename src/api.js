import axios from 'axios';

export const fetchData = async (query, page) => {
    // const Authorization = "f-gCGpBlDecAOG_Hwuo8ockjZKFoU3io54O3WmbOo0A"
    // const ACCESS_KEY = "f-gCGpBlDecAOG_Hwuo8ockjZKFoU3io54O3WmbOo0A"

    const responce = await axios(`https://api.unsplash.com/search/photos/?client_id=f-gCGpBlDecAOG_Hwuo8ockjZKFoU3io54O3WmbOo0A`, {
        params: {
            query,
            page,
            per_page: 10,
        }
    });
    // console.log(responce.data.results)
    return responce.data;
}
