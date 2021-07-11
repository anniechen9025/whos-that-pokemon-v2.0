const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
// const session = require('express-session');

const socketIo = require('socket.io')
let io;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// Define middleware here
// app.use(session(sess));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemongame"
);

// Start the API server
app.listen(PORT, 'http://localhost:8080', function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  const server = app.listen(PORT, () => console.log('Now listening'));
  io = socketIo(server);
  //const io = socketIO(server)
  io.on('connection', (socket) => {
    console.log('User connected')
  
    // Think about this as an event listener
    socket.on('chat message', (data, user_name) => {
      console.log(data)
      // Sends the message to the client
      io.emit('chat message', data, user_name)
    })
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  })
});