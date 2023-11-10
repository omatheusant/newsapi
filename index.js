const express = require ('express');
const server = express();
const astroNews = require ('./src/data/astroNews.json')

server.get('/astronomy', (req, res) => {
    return res.json(astroNews)
})

server.listen(3000, () => {
    console.log('servidor está funcionando...')
})