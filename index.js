const express = require("express");

const app = express();


const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.status(200).send("<h2>Hello, World!!</h2>");
})

app.listen(port, () => console.log("Server running on port ", port));
