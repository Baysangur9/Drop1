const  Comment   = require('../models/comments.model')


module.exports.commentsController =  {
    addCom: (req,res) => {
        Comment.create({
            comAuthor: req.body.comAuthor,
            comText: req.body.comText,
            newsId: req.body.newsId
    
        }).then((Comment) => {
            res.json(Comment);
        })

        
    },

    getCom: (req,res) => {
        Comment.find().then((Comment) => {
            res.json(Comment)
         })
    },

    deleteCom: function(req,res) {
        Comment.findByIdAndRemove(req.params.id).then(() => {
            res.json("Коментарий удален");
        });
    }


}
