const Card = require("../models/card");
const {
	ERR_BAD_REQUEST,
	ERR_NOT_FOUND,
	ERROR_INTERNAL_SERVER
} = require("../errors/errors");

//Проверка id карточки
const checkCard = (card, res) => {
	if (card) {
		return res.send(card);
	}
	return res
		.status(ERR_NOT_FOUND)
		.send({ message: "Card with this id is not found" });
};

//Пполучение данных карточек
const getCards = (req, res) => {
	Card.find({})
		.then((cards) => res.status(200).send(cards))
		.catch(() => {
			res.status(ERROR_INTERNAL_SERVER).send({ message: "An error occured on the server, please try again later" });
		});
};

//Создание карточки
const createCard = (req, res) => {
	const data = new Date();
	const { name, link } = req.body;
	const owner = req.user._id;

	Card.create({ name, link, owner })
		.then((card) => {
			res.status(200).send({
				name: card.name,
				link: card.link,
				owner: card.owner,
				_id: card._id,
				createdAt: data,
			});
		})
		.catch((error) => {
			if (error.name === "ValidationError") {
				return res
					.status(ERR_BAD_REQUEST)
					.send({ message: "Your personal details were not entered correctly" });
			}
			return res
				.status(ERROR_INTERNAL_SERVER)
				.send({ message: "An error occured on the server, please try again later" });
		});
};

//Лайк карточке
const setLikeCard = (req, res) => {
	Card.findByIdAndUpdate(
		req.params.cardId,
		{ $addToSet: { likes: req.user._id } },
		{ new: true }
	)
		.then((card) => checkCard(card, res))
		.catch((error) => {
			if (error.name === "CastError") {
				return res
					.status(ERR_BAD_REQUEST)
					.send({ message: "Card is not found" });
			}
			return res
				.status(ERROR_INTERNAL_SERVER)
				.send({ message: "An error occured on the server, please try again later" });
		});
};

//Снятие лайка с карточки
const setDislikeCard = (req, res) => {
	Card.findByIdAndUpdate(
		req.params.cardId,
		{ $pull: { likes: req.user._id } },
		{ new: true }
	)
		.then((card) => checkCard(card, res))
		.catch((error) => {
			if (error.name === "CastError") {
				return res
					.status(ERR_BAD_REQUEST)
					.send({ message: "Card is not found" });
			}
			return res
				.status(ERROR_INTERNAL_SERVER)
				.send({ message: "An error occured on the server, please try again later" });
		});
};

//Удаление карточки
const deleteCard = (req, res) => {
	const cardId = req.params.cardId;

	Card.findByIdAndDelete(cardId)
		.then((card) => checkCard(card, res))
		.catch((error) => {
			if (error.name === "CastError") {
				return res
					.status(ERR_BAD_REQUEST)
					.send({ message: "Card is not found" });
			}
			res.status(ERROR_INTERNAL_SERVER).send({ message: "An error occured on the server, please try again later" });
		});
};

module.exports = {
	getCards,
	createCard,
	setLikeCard,
	setDislikeCard,
	deleteCard
};
