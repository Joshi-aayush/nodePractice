function getMessage(req, res) {
  res.send("<ul><li>Hello Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("updating messages....");
}

module.exports = {
  getMessage,
  postMessage,
};
