
const fs = require('fs');
const csv = require('csv-parser')
const db = require('../models/db')

const importCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = {};

        fs.createReadStream(filePath)
        .pipe(csv({ headers: true }))
        .on('data', (row) => {
            console.log(row);

            db.run(`INSERT INTO location 
                (country,
                code, first_dist, second_dist, third_dist,
                x_coord, y_coord,
                longitude_degrees, longitude_minutes, longitude_seconds,
                latitude_degrees, latitude_minutes, latitude_seconds,
                longitude_seconds_hund, latitude_seconds_hund, last_update)
                VALUES
                (?,
                ?, ?, ?, ?,
                ?, ?,
                ?, ?, ?,
                ?, ?, ?,
                ?, ?, ?)`,
                [
                    row._0, // country
                    row._1, // code
                    row._2, // first_dist
                    row._3, // second_dist
                    row._4, // third_dist
                    row._5, // x_coord
                    row._6, // y_coord
                    row._7, // longitude_degrees
                    row._8, // longitude_minutes
                    row._9, // longitude_seconds
                    row._10, // latitude_degrees
                    row._11, // latitude_minutes
                    row._12, // latitude_seconds
                    row._13, // longitude_seconds_hund
                    row._14, // latitude_seconds_hund
                    row._15  // last_update
                ], (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        })
        .on('end', () => {
            resolve(results);
        })
        .on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { importCSV };