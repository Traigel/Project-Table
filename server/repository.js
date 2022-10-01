const fs = require('fs');

const getData = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('db.json', (err, buf) => {
            const arrData = JSON.parse(buf.toString())
            if (err) reject(err)
            else resolve(arrData)
        })
    })
}

exports.getData = getData
