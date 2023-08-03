const User = require("../models/user");
const {
	ERR_BAD_REQUEST,
	ERR_NOT_FOUND,
	ERROR_INTERNAL_SERVER
} = require("../errors/errors");

//Получение данных id
const getUsers = (req, res) => {
	User.find({})
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((error) =>
			res.status(ERROR_INTERNAL_SERVER).send({ message: "An error occured on the server, please try again later" })
		);
};

const getUserId = (req, res) => {
	const userId = req.params.userId;
	console.log("присходит получение пользователя с id: " + userId)

	User.findById(userId)
		.then((user) => {
			if (!user) {
				res.status(ERR_NOT_FOUND).send({ message: "User is not found" });

				return;
			}
			res.status(200).send(user);
		})
		.catch((error) => {
			if (error.name === "CastError") {
				return res
					.status(ERR_BAD_REQUEST)
					.send({ message: "User is not found" });
			}
			res.status(ERROR_INTERNAL_SERVER).send({ message: "An error occured on the server, please try again later" });
		});
};

//Создание пользователя
const createUser = (req, res) => {
	const { name, about, avatar } = req.body;

	User.create({ name, about, avatar })
		.then((newUser) => res.status(200).send(newUser))
		.catch((error) => {
			if (error.name === "ValidationError") {
				return res.status(ERR_BAD_REQUEST).send({
					message: "Your personal details were not entered correctly",
				});
			}
			return res
				.status(ERROR_INTERNAL_SERVER)
				.send({ message: "An error occured on the server, please try again later" });
		});
};

//Редактирование информации пользователя
const updateUserInfo = (req, res) => {
	const { name, about } = req.body;
	console.log("name - " + name)
	console.log("about - " + about)

	User.findByIdAndUpdate(
		req.user._id,
		{ name: name, about: about },
		{ new: true, runValidators: true }
	)
		.then((updateUser) => res.status(200).send(updateUser))
		.catch((error) => {
			if (error.name === "ValidationError") {
				return res.status(ERR_BAD_REQUEST).send({
					message: "Your personal details were not entered correctly",
				});
			}
			res.status(ERROR_INTERNAL_SERVER).send({ message: "An error occured on the server, please try again later" });
		});
};

//Обновление аватара
const updateAvatar = (req, res) => {
	const { avatar } = req.body;
	User.findByIdAndUpdate(
		req.user._id,
		{ avatar },
		{
			new: true,
			runValidators: true,
		}
	)
		.then((user) => res.status(200).send(user))
		.catch((error) => {
			if (error.name === "ValidationError") {
				return res.status(ERR_BAD_REQUEST).send({
					message: "Your personal details were not entered correctly",
				});
			}
			return res
				.status(ERROR_INTERNAL_SERVER)
				.send({ message: "An error occured on the server, please try again later" });
		});
};

module.exports = {
	getUsers,
	getUserId,
	createUser,
	updateUserInfo,
	updateAvatar
};
