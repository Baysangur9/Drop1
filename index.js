const mongoose = require("mongoose");
const express = require('express')
const app = express()

app.use(express.json());

mongoose.connect("mongodb+srv://Baysangur:bechan999@cluster0.igeqhh5.mongodb.net/NewsBack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(require("./routes/News.route"))

app.listen(3000, ()=>{
   console.log('Сервер работает')
})