var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get("/", (req,res) => {
	return res.send("You are here");
});

app.post("/update", (req, res) => {
	console.log(req.body.data + "\n");
	console.log(req.body.type + "\n");
	return res.json({result: "valid"});
});

app.listen(process.env.PORT || 3000, (req, res) => {
	console.log("My server is running");
})