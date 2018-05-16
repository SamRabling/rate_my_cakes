const mongoose = require("mongoose");
var Rate = mongoose.model("rate");
var Cake = mongoose.model("cake");

module.exports = {

    index: function (req, res) {
        Cake.find({}, function (err, cake) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ data: cake });
            }
        });
    },

    new: function (req, res) {
        console.log("post data");
        var cake = new Cake({
            baker: req.body.baker,
            img: req.body.img
        });
        cake.save(function (err) {
            if (err) {
                res.json({ status: false, data: err });
            } else {
                res.json({ status: true, data: cake });
            }
        });
    },

    show: function (req, res, err) {
        var id = req.params.id
        Cake.findOne({ _id: id }, function (err, cake) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: cake });
            }
        });
    },

    rating: function (req, res) {
        console.log(req.params);
        Cake.findOne({ _id: req.params.id }, function (err, cake) {
            if (err) {
                res.json({ status: false, data: err });
                console.log(err)
            }
            else {
                cake.rating.push(req.body);
                cake.save(function (err) {
                    if (err) {
                        res.json({ status: false, data: err });
                    }
                    else{
                        res.json({ status: true, data: cake });
                        console.log(cake);
                    }
                    
                
                });
            }
        }); 
    }
}