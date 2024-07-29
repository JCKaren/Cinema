/*var config = require('./config/dbConnection');
const sql = require('msnodesqlv8');


async function getLoginDetails() {
    try {
        // Wrap the sql.query call in a Promise
        const rows = await queryAsync(config, 'SELECT * FROM Directores');
        console.log(rows);
    } catch (error) {
        console.error('Error fetching login details:', error);
    }
}

// Helper function to wrap sql.query in a Promise
function queryAsync(config, query) {
    return new Promise((resolve, reject) => {
        sql.query(config, query, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

module.exports = {
    getLoginDetails: getLoginDetails
}*/