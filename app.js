const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('server running on port %s', port);
});

/* http://localhost:8080 */
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/login.html');
});

/* http://localhost:8080/login */
app.post('/login', (req,res) => {
	res.end('Login successful.');
});

app.get('/getmovies', (req, res) => {
	var data = fs.readFileSync('./movies.json');
	var movies = JSON.parse(data);
	res.json(movies);
});
