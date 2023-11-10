const express = require ('express');
const app = express();
const astroNews = require ('./src/data/astroNews.json')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

app.get('/', (req, res) => {
    return res.json(astroNews)
})

app.listen(5000, () => {
    console.log('servidor está funcionando...')
})

module.exports = app