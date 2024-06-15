const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Article = require("./Schema/Articles");
const cors = require('cors');
const ArtAdd = require("./Schema/ArticleAdd");

const dbURI = 'mongodb+srv://Khushal_iskp:anurag1976@personalserver.gtmeqbe.mongodb.net/';

app.use(express.json());
app.use(cors());
const port = 8000;

mongoose.connect(dbURI)
  .then(result => {
    app.listen(port);
    console.log('conencted to db')
  })
  .catch(err => {
    console.log(err);
})

app.get("/api/comments", (req, res) => {
    try {
        Article.find().sort({ createdAt: -1 })
        .then(result => {
          res.json(result);
        }) 
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch comment", error: error.message }); 
    }
});

app.post("/api/comments", (req, res) => {
    try{
        let blog = new Article(req.body);
        blog.save().then(res.redirect("/api/comments"))
    } catch(error) {
        res.status(500).json({ message: "Failed to add comment", error: error.message });
    }
})

app.get("/api/articles", (req, res) => {
  try {
      ArtAdd.find().sort({ createdAt: -1 })
      .then(result => {
        res.json(result);
      }) 
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comment", error: error.message }); 
  }
});

app.post("/api/articles", (req, res) => {
  try{
      let blog_add = new ArtAdd(req.body);
      blog_add.save().then(res.redirect("/api/articles"))
  } catch(error) {
      res.status(500).json({ message: "Failed to add comment", error: error.message });
  }
})