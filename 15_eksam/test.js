const express = require('express');
const bodyparser = require('body-parser')
const mysql = require('mysql2');

const app = express();
const dbConfig = require('../../vp23config');
const dataBase = 'if23_proovikivi';
const pool = require('./src/databasepool').pool;

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const conn = mysql.createConnection({
	host: dbConfig.configData.host, 
	user: dbConfig.configData.user,
	password: dbConfig.configData.password,
	database: dataBase
});

app.get('/', (req, res) => {
    console.log("Leht töötab");
    res.render('test');
});

app.get('/oppeained', (req, res) => {
    console.log('Nupp vajutatud');
    let notice = 'Ootel';
    console.log(req.body);
    let sql = 'SELECT * FROM Oppeaine';

    pool.getConnection((err, conn)=>{
		if(err){
			throw err;
		}
		else {
			conn.execute(sql, (err, result)=>{
                if (err) {
                    console.log('Andmete saamine ebaõnnestus');
                    notice = 'Andmete saamine ebaõnnestus!';
                    res.render('oppeained', { notice: notice, oppeaine: [] });
                    conn.release();
                } else {
                    console.log('Andmete saamine õnnestus');
                    console.log(result);
                    notice = 'Andmete saamine õnnestus!';
                    res.render('oppeained', { notice: notice, oppeaine: result });
                    conn.release();
                }
			});
		}
	});	
});

// Start the server
app.listen(5205, () => {
    console.log('Server is running on port 5205');
});