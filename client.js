const net = require("net");
const { IP, PORT, userName } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // listens for data incoming from server
  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // events on connect
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${userName}`);
  });

  // events on error
  conn.on("error", () => {
    console.log("You can't move when you're dead! Quit game to restart.");
  });

  return conn;
};

module.exports = {
  connect
};