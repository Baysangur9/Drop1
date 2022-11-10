const News = require("../models/News.model");

module.exports.newsController = {
    getNews: function (req, res) {
        News.find().then((News) => {
            res.json(News);
        });
    },

    getNewsById: function (req, res) {
        News.findById(req.params.id).then((news) => {
            res.json(news)
        })
    },
    getNewsByCategory: function (req, res) {
        News.find({
                category: req.params.categoryID
            })
            .populate('category')
            .then((news) => {
                res.json(news)
            })
    },




    addNews: function (req, res) {
        News.create({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
        });
        res.json("ok");
    },

    deleteNews: function (req, res) {
        News.findByIdAndRemove(req.params.id).then(() => {
            res.json("Новасть удалена");
        });
    },

    updateNews: function (req, res) {
        News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        }, {
            new: true
        }).then((news) => {
            res.json(news)
        })
    },
};