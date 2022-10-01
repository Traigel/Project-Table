const {getData} = require('./repository');

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let arrData = await getData()
    if (!!req.query.search && !!req.query.column && !!req.query.condition) {
        const search = req.query.search.toLowerCase()
        const column = req.query.column
        const condition = req.query.condition
        if (condition === 'equals') {
            arrData = arrData.filter(el => el[column] == search)
        }
        if (condition === 'contains') {
            arrData = arrData.filter(el => el[column].indexOf(search) > -1)
        }
        if (condition === 'more') {
            arrData = arrData.filter(el => el[column] > search)
        }
        if (condition === 'less') {
            arrData = arrData.filter(el => el[column] < search)
        }
    }
    // arrData = arrData.filter((el, index) => index < 5)
    const data = {
        arrData,
        totalCountData: arrData.length,
        page: 1,
        pageCount: 5
    }
    res.send(data)
})

module.exports = router