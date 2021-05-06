const axios = require('axios');
const url = 'https://bling.com.br/Api/v2/';
const api_token = '3cf9fc516d6da9f4124a9e9f2d74e2c8d00db38eda2d6a5cb9ea974a38685845fd2433e7';

module.exports = {
    async saveBlingOffer(blingXmlBody) {
        const response = await axios.post(`${url}/pedido/json/?apikey=${api_token}&xml=${blingXmlBody}`);
        return response;
    }

}