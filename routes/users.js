const router = require("express").Router();
const {
	getUsers,
	getUserId,
	createUser,
	updateUserInfo,
	updateAvatar
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getUserId);
router.post("/", createUser);
router.patch("/me", updateUserInfo);
router.patch("/me/avatar", updateAvatar);

module.exports = router;