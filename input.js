const { stdin } = require("process");
const { keyMapping } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for stdin
  return stdin;
};

// "data" callback handler for stdin
const handleUserInput = function (key) {

  switch (key) {
    case 'w':
      connection.write(`Move: ${keyMapping["w"]}`);
      break;
    case 'a':
      connection.write(`Move: ${keyMapping["a"]}`);
      break;
    case 's':
      connection.write(`Move: ${keyMapping["s"]}`);
      break;
    case 'd':
      connection.write(`Move: ${keyMapping["d"]}`);
      break;
    // messages
    case '1':
      connection.write(`Say: ${keyMapping[1]}`);
      break;
    case '2':
      connection.write(`Say: ${keyMapping[2]}`);
      break;
    case '3':
      connection.write(`Say: ${keyMapping[3]}`);
      break;
    case '4':
      connection.write(`Say: ${keyMapping[4]}`);
      break;
    // end game
    case '\u0003': // ctrl+c
      process.exit();
      break;
  }
};

module.exports = {
  setupInput
};