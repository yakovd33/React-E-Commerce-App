import axios from 'axios';

export function ApiCallGet (url, params = null, callback) {
    URL = 'http://localhost:5000/api/' + url;
    
    axios.get(URL).then((response) => {
        callback(response.data);
    }).catch((error) => {  })
}