const express = require("express");
const response = require("../models/response");
const router = express.Router();

router.get("/response/user/:id", (req, res) => {
	id = req.params.id;
	response
		.find({ userId: id })
		.exec()
		.then((responseObject) => {
			res.send(JSON.stringify(responseObject));
		});
});

router.get("/response/:id", (req, res) => {
	id = req.params.id;
	response
		.findById(id)
		.exec()
		.then((responseObject) => res.send(JSON.stringify(responseObject)));
});

router.post("/response", (req, res) => {
	const { userId, fields } = req.body;
	response.create({
		userId: userId,
		fields: fields,
	});

	res.send("Created Successfully!");
});

module.exports = router;
