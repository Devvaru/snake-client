const IP = 'localhost'; // client IP
const PORT = 50541; // server port
const userName = 'DEV';
const keyMapping = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  1: "Say: So long!",
  2: "Say: You're hisssterical!",
  3: "Say: Sssee you later!",
  4: "Say: Don’t hiss me off!"
};

module.exports = {
  IP,
  PORT,
  userName,
  keyMapping
};