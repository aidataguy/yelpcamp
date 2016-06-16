var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// var campGround = [{
	

// }]


app.get("/", function (req, res) {
	 /* body... */ 
	res.render("landing");
});

var campGrounds = [
	{name: "Salmon Creek", imageurl: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
	{name: "Rohtang Pass", imageurl: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
	{name: "leh pass", imageurl: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
	{name: "Two moon mountain", imageurl: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},
	{name: "Salmon Creek", imageurl: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
	{name: "Rohtang Pass", imageurl: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
	{name: "leh pass", imageurl: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
	{name: "Two moon mountain", imageurl: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},
	{name: "Salmon Creek", imageurl: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
	{name: "Rohtang Pass", imageurl: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
	{name: "leh pass", imageurl: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
	{name: "Two moon mountain", imageurl: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"}
	]

app.get("/campgrounds", function (req, res) {
	 /* body... */ 
	
	res.render("campgrounds", {campgrounds: campGrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form & add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, imageurl: image}
	campGrounds.push(newCampground);
	// redirect back to "get" route of campgrounds
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
	 /* body... */ 
	 res.render("new");
});
app.listen(8080, function(){
	console.log("yelp camp started")
});