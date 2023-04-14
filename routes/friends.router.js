const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("ip address", req.ip);
  next();
});

friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
// get -> /friend/22
friendsRouter.get("/:friendId", friendsController.getAnIndividualFriends);

module.exports = friendsRouter;
