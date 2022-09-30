const fs = require('fs');

const getData = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('db.json', (err, buf) => {
            const arrData = JSON.parse(buf.toString())
            const data = {
                arrData,
                totalCountData: arrData.length,
                page: 1,
                pageCount: 5
            }
            if (err) reject(err)
            else resolve(data)
        })
    })
}

exports.getData = getData
