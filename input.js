const { stdin } = require("process");

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
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    // messages
    case '1':
      connection.write("Say: So long!");
      break;
    case '2':
      connection.write("Say: You're hisssterical!");
      break;
    case '3':
      connection.write("Say: Throw a hissy fit!");
      break;
    case '4':
      connection.write("Say: Don’t hiss me off!");
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