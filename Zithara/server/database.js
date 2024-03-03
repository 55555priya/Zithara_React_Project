const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "SSNPjallg5@",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

module.exports = client

// pool.connect()
// const port = 3001
// app.get('/products', async (req, res) => {
//     const { rows } = await pool.query(`SELECT * from products`, 
//     res.send(rows))
//   })
  
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
















// app.get('/getdetails', async (req, res) => {
//     try 
//     {
//       const result = await pool.query('SELECT * FROM customers');
//       res.json(result.rows);
//     } 
//     catch (err) 
//     {
//       console.error('Error executing query', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   app.listen(5432, () => {
//     console.log("Server running on port 3001");
//   });

// pool.query("CREATE DATABASE ZITHARA_DATABASE")