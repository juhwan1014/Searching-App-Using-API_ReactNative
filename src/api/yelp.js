import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer i_AiWNl2MlONySmKw2814_zH6PE4tLYct8kYamBk_fcZ6bk07P3YYh5N9Dao4FYp_7NR5riZduSdwt_c0PfrpiTmil_8vWH--t0SqefFeOxe2kCVUlobcvlDFGwlYHYx'
    }
})