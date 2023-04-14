const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "Jason hyden" },
  { id: 1, name: "Aayush Joshi" },
  { id: 2, name: "Albert Einstein" },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  //actions go here...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriends = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriends);

  res.json(newFriends);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

// get -> /friend/22
app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friend[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exits",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("updating messages....");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
