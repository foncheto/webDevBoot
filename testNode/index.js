const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/',(req, res) => {
    res.render('home')
})

app.get('/random', (req, res) => {
    res.render('random')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})