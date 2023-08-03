const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');
const routeApp = require("./routes/application");

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	req.user = {
		_id: '64cb9c66d62b40265b12319d' // вставьте сюда _id созданного в предыдущем пункте пользователя
	};

	next();
});
app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use(routeApp);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});