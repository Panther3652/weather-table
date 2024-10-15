
const axios = require('axios');
const API_KEY = process.env.API_KEY;

exports.fetchWeatherData = async (firstDist) => {
    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraStrNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&`;
    const response = await axios.get(url);
    return response.data;
}