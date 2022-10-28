const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ApniKalmUser" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then( () => console.log(`We are connected with mongoDb at port number 27017`))
.catch( (err) => console.log(`Some Error found in connecting to MongoDb server`));



