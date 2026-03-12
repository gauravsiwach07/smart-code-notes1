
const router = require("express").Router();
const Note = require("../models/Note");

router.post("/create", async(req,res)=>{
 const note = new Note(req.body);
 await note.save();
 res.json(note);
});

router.get("/", async(req,res)=>{
 const notes = await Note.find();
 res.json(notes);
});

module.exports = router;
