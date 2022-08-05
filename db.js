const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user: 'swifter',
  database: 'todos',
  password: '24%04V5841495i'
})

connection.connect(err => {
  if (err) return console.log(err)
  else console.log('Database connection successful')
})

module.exports = connection