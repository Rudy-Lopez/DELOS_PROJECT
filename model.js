'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
	userName: String,
	createdAt: {type: Date, default: Date.now},
	comment: String
});


var Comment = mongoose.model("Comment", CommentSchema);

module.exports.Comment = Comment;
