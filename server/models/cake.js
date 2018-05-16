const mongoose = require("mongoose");

var RateSchema = new mongoose.Schema({
    rating: { type: Number, required: true},
    comment: { type: String, required: true, minlength: 5 }
},
    { timestamps: true });
mongoose.model("Rate", RateSchema);

// cake schema
var CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true, minlength: 2 },
    img: { type: String, required: true, minlength: 10 },
    rating: [RateSchema]
},
    { timestamps: true });
mongoose.model("Cake", CakeSchema);
