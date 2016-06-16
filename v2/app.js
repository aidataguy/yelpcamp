var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// Schema Setup 
var campgroundSchema = new mongoose.Schema({
	name: String,
	imageurl: String
});
// creates model using schema
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 			name: "Rohtang Pass",
// 			imageurl: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"

// 		}, function (err, campground) {
// 		 /* body... */ 
// 		 if (err) {
// 		 console.log(err);
// 		} else {
// 		 console.log("New Campground Added");
// 		 console.log(campground);
// 		}
// 	});

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

app.get("/", function (req, res) {
	 /* body... */ 
	res.render("landing");
});



app.get("/campgrounds", function (req, res) {
	 /* body... */ 
	// get all campgrounds from db
	Campground.find({}, function (err, allCampgrounds) {
			 /* body... */ 
		if (err) {
			console.log(err);
		}else {
			res.render("campgrounds", {campgrounds: allCampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	// get data from form & add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, imageurl: image}
	// create new campground and save to DB
	Campground.create(newCampground, function (msg, newCG) {
		 /* body... */
		 if (msg) {
		 	console.log(msg)
		 } else {
		 // redirect back to "get" route of campgrounds
			res.redirect("/campgrounds");
		 }
	});
});

app.get("/campgrounds/new", function (req, res) {
	 /* body... */ 
	 res.render("new");
});
app.listen(8080, function(){
	console.log("yelp camp started")
});