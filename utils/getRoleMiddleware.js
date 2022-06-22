async function getRolemiddleware(req, res, next) {
    if (!req.body?.token) {
        req.role = "unauthentificated"
        return next()
    }
    const User = req.app.get("models").User
    const TocheckUser = await User.findOne({token: req.body.token})

    if (!TocheckUser) {
        req.role = "unauthentificated"
        return next()
    }

    req.role = TocheckUser.role
    return next()
}

module.exports = getRolemiddleware