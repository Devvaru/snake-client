const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // listens for data incoming from server
  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};