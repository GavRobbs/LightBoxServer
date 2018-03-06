var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

var colors= [0, 0, 0, 0, 0, 0];
var blink = 0;
var blink_delay = 0;
var pattern_switch_delay = 0;
var pattern_code = "";
var display_type = "nopattern";

function ClearEverything(){
	colors= [0, 0, 0, 0, 0, 0];
	blink = false;
	blink_delay = 0;
	pattern_switch_delay = 0;
	pattern_code = "";
	display_type = "nopattern";
}

app.get("/", (req,res) => {
	return res.send("You are here");
});

app.post("/update", (req, res) => {
	ClearEverything();
	if(req.body.type == "nopattern"){
		display_type = "nopattern";
		colors = req.body.data_out.color_array;
		blink = req.body.data_out.blink;
		blink_delay = req.body.data_out.blink_delay;
	} else{
		display_type = "pattern";
		pattern_code = req.body.data_out.pattern_code;
		pattern_switch_delay = req.body.data_out.pattern_switch_delay;
	}
	return res.json({result: "valid"});
});

app.get("/todo", (req, res) => {
	if(display_type == "nopattern"){
		return res.send("context:todo;type:0;" + "colors:"+colors.toString()+";blink:" + blink.toString() +";blink_delay:" + blink_delay.toString()+";");
	} else{
		return res.send("context:todo;type:1;pcode:"+pattern_code.toString().substr(0,32)+";delay:" + pattern_switch_delay.toString()+";");
	}
});

app.listen(process.env.PORT || 3000, (req, res) => {
	console.log("My server is running");
})