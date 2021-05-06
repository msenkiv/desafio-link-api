const axios = require('axios');
const url = 'https://api.pipedrive.com/v1';
const api_token = '5fb602717576e885551b26c5763cc21f060f0134';

module.exports = {
    async getPipeDriveData(status, start) {
        const response = await axios.get(
            `${url}/deals`, { params: { api_token, status, start } }
        );
        return response.data;
    }

}