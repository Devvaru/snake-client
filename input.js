const { stdin } = require("process");
const { keyMapping } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for stdin
  return stdin;
};

// "data" callback handler for stdin
const handleUserInput = function(key) {

  // quit game
  if (key === "x") {
    process.exit();
  }

  // wasd and message inputs
  const msg = keyMapping[key];
  if (msg) {
    connection.write(msg);
  }

};

module.exports = {
  setupInput
};