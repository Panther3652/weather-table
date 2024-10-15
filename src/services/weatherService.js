
const axios = require('axios');
const API_KEY = process.env.API_KEY;

let today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const baseDate = `${year}${month}${date}`;
const baseTime = ('0' + today.getHours()).slice(-2)

exports.fetchWeatherData = async (nx, ny) => {
    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraStrNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}00&nx=${nx}&ny=${ny}`;
    const response = await axios.get(url);
    return response.data;
}