const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'satpal@123',
  database: 'satpal'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to database...')
})

module.exports = connection
