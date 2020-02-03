const express = require('express')
const app = express()
const port = 3000

var clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => {
    res.sendFile(clientDir + 'lektion.html')
})
app.listen(port, () => console.log(`Example app listening on port port!`))