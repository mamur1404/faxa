// fs nodejs ga tegishli File system

const fs = require('fs')
const path = './gulp/tasks'

const arrayOfPath = fs.readdirSync(path).map(fileName => fileName = `${path}/${fileName}`)

module.exports = arrayOfPath