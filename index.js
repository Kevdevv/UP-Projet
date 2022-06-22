const express = require("express")
const mongoose = require("mongoose")

const models = require("./models")
const getRolemiddleware = require("./utils/getRoleMiddleware")

//mongoose.connect("mongodb://localhost/sportCenters", {useUnifiedTopology : true})

mongoose.connect("mongodb://localhost:27017/sportCenters", function(err, db) {
    if (err) {
        console.log(err);
        console.log('mongodb is not running');
        process.exit(0);
    } else {
        console.log('ok')
    }
   
});

const app = express()

app.set("models", models)

const userRoute = require("./routes/user")
const customerRoute = require("./routes/customer")


app.use(express.json())
app.use(getRolemiddleware)

userRoute(app)
customerRoute(app)

app.listen(3000, () => {
    console.log("Server successfully launched")
})