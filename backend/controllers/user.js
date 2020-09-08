const { User } = require("../model/user");

exports.sign_up = async (req, res) => {
	try {
		const user = new User({
			_id: req.body._id,
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			isAdmin: req.body.isAdmin,
		});
		const newUser = await user.save();
		res.send(newUser);
	} catch (err) {
		console.log(err);
	}
};

exports.remove_user = async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	if (!user) return res.status(404).json({ msg: "user is not registred" });
	res.status(200).json({ msg: "user deleted successfully" });
};

exports.update_user = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	if (!user) res.status(404).json({ msg: "user not found" });
	res.json({ msg: "user updates successfully" });
};
