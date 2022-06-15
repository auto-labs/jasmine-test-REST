global.makeRequest = function (url,method, data, headers) {
    const axios = require('axios').default;
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    })
    .then(function(response){
        return response;
    })
}