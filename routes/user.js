const {userGet, userCreate, userDelete, userUpdate, userLogin} = require("../controllers/user")

function userRoute(app) {
    //Create
    app.post("/userCreate", userCreate)
    //Read
    app.get("/users", userGet)
    //Delete
    app.post("/userDelete", userDelete)
    //Update
    app.post("/userUpdate", userUpdate)
    //Login
    app.post("/userLogin", userLogin)
    }


module.exports = userRoute