import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'atracciones'
})

db.connect(
  error => {
    if (error) throw error
    console.log('Base de datos conectada')
  }
)

export default db