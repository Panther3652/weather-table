
const { fetchWeatherData } = require('../services/weatherService');

exports.getWeather = async (req, res) => {
    try {
        const data = await fetchWeatherData(req.params.nx, req.params.ny);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};