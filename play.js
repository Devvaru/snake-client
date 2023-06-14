const { connect } = require("./client");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for stdin
  return stdin;
};

// "data" callback handler for stdin
const handleUserInput = function () {

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  };
};