const {getData} = require('./repository');

exports.dataController = async (req, res) => {
    if (req.method === 'GET') {
        const data = await getData()
        res.write(JSON.stringify(data));
        res.end()
    } else {
        res.end()
    }
}