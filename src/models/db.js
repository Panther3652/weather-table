
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../location.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS location (
        country TEXT,
        code TEXT,
        first_dist TEXT,
        second_dist TEXT,
        third_dist TEXT,
        x_coord INTEGER,
        y_coord INTEGER,
        longitude_degrees INTEGER,
        longitude_minutes INTEGER,
        longitude_seconds REAL,
        latitude_degrees INTEGER,
        latitude_minutes INTEGER,
        latitude_seconds REAL,
        longitude_seconds_hund REAL,
        latitude_seconds_hund REAL,
        last_update TEXT
        )`
    );
});

module.exports = db;