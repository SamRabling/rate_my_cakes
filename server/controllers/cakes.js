const mongoose = require("mongoose");
var Rate = mongoose.model("Rate");
var Cake = mongoose.model("Cake");

module.exports = {

    index: function (req, res) {
        Cake.find({}, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ data: task });
            }
        });
    },

    new: function (req, res) {
        console.log("post data");
        var cake = new Cake({
            baker: req.body.title,
            img: req.body.description,
        });
        cake.save(function (err) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: cake });
            }
        });
    },

    show: function (req, res, err) {
        var id = req.params.id
        Cake.findOne({ _id: id }, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: cake });
            }
        });
    },

    rating: function (req, res) {
        console.log("post data");
        var cake = Cake.findOne({ _id: req.body.id }, function (err, cake) {
            if (err) {
                res.json({ status: false });
            }
            else {
                cake.rating.push({ rating: req.body.rating, comment: req.body.comment });
                cake.save(function (err) {
                    res.json({ status: true, data: cake });
                });
            }
        }); 
    }
}