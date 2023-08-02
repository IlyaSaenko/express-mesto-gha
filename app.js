const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

// app.use((req, res, next) => {
// 	req.user = {
// 		_id: '64c4f865568c72e552591476' // вставьте сюда _id созданного в предыдущем пункте пользователя
// 	};

// 	next();
// });

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});