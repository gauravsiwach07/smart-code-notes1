
const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
 title:String,
 code:String,
 language:String
});

module.exports = mongoose.model("Note",NoteSchema);
