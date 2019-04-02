const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'gowtham'
data.age = 22
data.gender = 'male'

fs.writeFileSync('1-json.json', JSON.stringify(data))