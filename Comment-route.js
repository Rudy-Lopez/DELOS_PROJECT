'use strict';

var express = require("express");
var CommentRouter= express.Router();
//Comments models is for mongoose
var Comment = require("./model").Comment;



// GET /Comments
// Route for Comments collection
CommentRouter.get("/", function(req, res, next){
	console.log('/Comments');
	Comment.find({})
				// .sort({createdAt: -1})
				.exec(function(err, Comments){
					if(err) return next(err);
					res.json(Comments);
				});
});

// POST /Comments
// Route for creating Comments
CommentRouter.post("/", function(req, res, next){
	console.log('Creating new Comment');
	console.log(req.body);
	var comment = new Comment(req.body);
	console.log(comment);
	// Mongo stuff below
	comment.save(function(err, comment){
		if(err) return next(err);
		res.status(201);
		res.json(comment);
	});
});


module.exports = CommentRouter;
