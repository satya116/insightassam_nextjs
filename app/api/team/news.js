const axios = require('axios');
const SERVER_URL = "http://localhost:5000";


const getAllNews = async() => {
    // Make a GET request to the endpoint
    try {
        const response = await axios.get(`${SERVER_URL}/api/team/news`);
        const news = response.data;
        console.log(news);
        return news;
        // Process the news data here
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching news:', error);
    }
}

export default getAllNews;