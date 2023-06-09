const model = require("../models/friends.models");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriends = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriends);

  res.json(newFriends);
}

function getFriends(req, res) {
  res.json(model);
}

function getAnIndividualFriends(req, res) {
  const friendId = +req.params.friendId;
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exits",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getAnIndividualFriends,
};
