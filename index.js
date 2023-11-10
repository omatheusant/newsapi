const express = require ('express');
const server = express();
const astroNews = require ('./src/data/astroNews.json')

server.get('/', (req, res) => {
    return res.json(astroNews)
})

server.listen(5000, () => {
    console.log('servidor está funcionando...')
})