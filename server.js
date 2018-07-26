var express = require("express");
var app = express();
var CommentRoutes = require("./Comment-route");
var jsonParser = require("body-parser").json;
app.use(jsonParser());

/*
	connection to Database
	Mongoose is the JavaScript Package used to talk to the mongo database
*/
var mongoose = require("mongoose");  // require the package from node_modules
mongoose.connect("mongodb://localhost:27017/dr"); // sets the configuration the specific database called dr; the last tag showed be changed to the name of your own database
var db = mongoose.connection; // a reference to the connection to allow us to use the connection
db.on("error", function(err){	// call this function on errors 
	console.error("connection error:", err);
});
db.once("open", function(){ // creates connections when requests
	console.log("dr connection successful");
});

/*
	Allow static content

	Can set options object as 2nd argument to change response
*/
// var options = {
// 	dotfiles: 'ignore',
// 	etag: false,
// 	extensions: ['htm', 'html'],
// 	index: false,
// 	maxAge: '1d',
// 	redirect: false,
// 	setHeaders: function (res, path, stat) {
// 	  res.set('x-timestamp', Date.now());
// 	  res.status = 200;
// 	}
//   }
app.use("/css", express.static('css'));
app.use("/pages", express.static('pages'));
app.use("/js", express.static('js'));
app.use("/DComment", CommentRoutes);

/*
	set / url to index.html
*/
app.use("/home", function(req,resp, next){
	resp.sendFile('/Users/rodolfolopez/my_git_repos/1806spark/Delos/music_rating.html');
})

app.listen(3000, function(){
	console.log("Express server is listening on port 3000");
});

