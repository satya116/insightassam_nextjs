const SERVER_URL = "http://localhost:5000";

const createNews = async (newsData) => {

    console.log("Handle Submit 2");


    let createNewsResponse

    try {
        createNewsResponse = await axios.post(`${SERVER_URL}/api/team/create-news`, newsData);
        // console.log("Data retrieved", allnews);
        return  createNewsResponse.data;

    } catch (error) {
        console.log("Something went wrong", error);
    }
    // return allnews.data;
}

export {createNews};