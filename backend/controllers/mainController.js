const getGoals = async (req, res) => {
    res.send("Get Request");
}

const setGoals = async (req, res) => {
    res.send("POST Request");
}

const updateGoals = async (req, res) => {
    res.status(200).send("Put Request from id: " + req.params.id);
}

const deleteGoals = async (req, res) => {
    res.status(200).send("Delete Request from id: " + req.params.id);
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}