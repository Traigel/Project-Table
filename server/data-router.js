const {getData} = require('./repository');

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let arrData = await getData()
    let totalCountData = arrData.length
    let page = 1
    let pageCount = 5
    if (!!req.query.search && !!req.query.column && !!req.query.condition) {
        const search = req.query.search.toLowerCase()
        const column = req.query.column.toLowerCase()
        const condition = req.query.condition.toLowerCase()
        if (condition === 'equals') {
            arrData = arrData.filter(el => el[column] == search)
        }
        if (condition === 'more') {
            arrData = arrData.filter(el => el[column] > search)
        }
        if (condition === 'less') {
            arrData = arrData.filter(el => el[column] < search)
        }
        if (condition === 'contains') {
            arrData = arrData.filter(el => el[column].indexOf(search) > -1)
        }
        totalCountData = arrData.length
    }
    if (!!req.query.page) {
        page = JSON.parse(req.query.page)
    }
    if (!!req.query.pageCount) {
        pageCount = JSON.parse(req.query.pageCount)
    }

    const indexMin = (page - 1) * pageCount
    const indexMax = indexMin + pageCount
    arrData = arrData.slice([indexMin], [indexMax])

    const data = {
        arrData,
        totalCountData,
        page,
        pageCount,
    }
    res.send(data)
})

module.exports = router