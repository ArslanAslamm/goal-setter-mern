const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
    res.send("Get Request");
})

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        res.send("Bad Request");
}
    res.send("POST Request");
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).send("Put Request from id: " + req.params.id);
})

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).send("Delete Request from id: " + req.params.id);
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}