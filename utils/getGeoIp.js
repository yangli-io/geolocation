var axios = require('axios');

module.exports = function getGeoIp(url, cb) {
    return axios.get(url);
};