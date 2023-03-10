const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://avishayav:mymdbaccount99@cluster0.mlivppk.mongodb.net/showsDB?retryWrites=true&w=majority"
);

// mongoose.connect("mongodb://localhost:27017/ShowsDB", () => {
//     console.log("Connected to Database")
// })