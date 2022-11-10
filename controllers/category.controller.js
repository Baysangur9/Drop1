const Category  = require('../models/Category.model')


module.exports.Category = {
   addCategory:(req,res) =>{
     Category.create({
        name:req.body.name,
     }).then((cat) => {
        res.json(cat);
      })
   },

   getCategory:(req,res) =>{
     Category.find().then((cat) => {
        res.json(cat)
     })
   },

   deleteCategory: function (req, res) {
    Category.findByIdAndRemove(req.params.id).then(() => {
        res.json("Категория удалена");
    });
   }
}