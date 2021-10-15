import axios from 'axios';

export function ApiCallGet (url, callback) {
    URL = 'http://localhost:5000/api/' + url;
    
    axios.get(URL).then((response) => {
        callback(response.data);
    }).catch((error) => {  })
}

export function ApiCallPost (url, params = {}, callback) {
    URL = 'http://localhost:5000/api/' + url;
    
    axios.post(URL, params).then((response) => {
        callback(response.data);
    }).catch((error) => {  })
}