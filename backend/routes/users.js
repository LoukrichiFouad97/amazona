/**
 * add user       POST /api/user/:id
 * delete user    DELETE /api/user/:id
 * get user       GET /api/user/:id
 * update user    PUT /api/user/:id
 *
 * get all users  GET /api/users
 *
 */

const router = require("express").Router();

const { User } = require("../model/user");
const { sign_up, update_user } = require("../controllers/user");
const { remove_user } = require("../controllers/user");
const { userValidator } = require("../validators/user");
const { runValidation } = require("../validators");

router.get("/", async (req, res) => {
	const users = await User.find();
	res.send(users);
	console.log("routes works well");
});

router.post("/:id", userValidator, runValidation, sign_up);
router.delete("/:id", remove_user);
router.put("/:id", userValidator, runValidation, update_user);

module.exports = router;
