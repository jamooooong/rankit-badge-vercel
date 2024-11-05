const axios = require('axios');

async function getUserRank(username) {
    try {
        const response = await axios.get(`https://server.rankit.run/api/v1/badge/get`, {
            params: { username },
            headers: { 'accept': '*/*' }
        });
        
        console.log('API 응답:', response.data);
        console.log('Response Status:', response.status);
        return response.data;
    } catch (error) {
        console.error('API 호출 오류:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    getUserRank
};