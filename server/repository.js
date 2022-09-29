const arrData = [
    {id: 1, date: '20.09.2022', title: 'Мяч', quantity: 34, distance: 100},
    {id: 2, date: '22.06.2022', title: 'Гантеля', quantity: 150, distance: 50},
    {id: 3, date: '05.12.2021', title: 'Телега', quantity: 10, distance: 35},
    {id: 4, date: '10.01.2022', title: 'Ведро', quantity: 61, distance: 345},
    {id: 5, date: '29.08.2022', title: 'Палка', quantity: 76, distance: 55},
    {id: 6, date: '01.05.2022', title: 'Резина', quantity: 37, distance: 15},
]

const data = {
    arrData,
    totalCountData: arrData.length,
    page: 1,
    pageCount: 4
}

const getData = () => {
    return data
}

const addData = (name) => {
    data.arrData.push({id: 6, date: '01.01.2021', title: name, quantity: 300, distance: 10})
}

exports.getData = getData
exports.addData = addData
