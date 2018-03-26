import axios from 'axios';

export const httprequest = (url,body = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url,body).then((response) => {
            resolve(response.data.res)
        })
    })
}