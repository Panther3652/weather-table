
const { importCSV } = require('../services/importService')

const importData = async (req, res) => {
    const { filePath } = req.body;

    try {
        await importCSV(filePath);
        res.status(200).send('CSV file was read successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while retrieving data.');
    }
};

module.exports = { importData };