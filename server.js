const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const socketIo = require('socket.io')
let io;

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: 'mongodb://localhost/pokemongame',
  collection: 'mySessions',
  database: 'pokemongame'
});

// Catch errors
store.on('error', function (error) {
  console.log(error);
});

app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Add Cor as a middleware
app.use(cors());

//Login Auth API 
app.use('/authlogin', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// Add routes, both API and view
app.use(routes);

//! testing why error {[0] Error: ENOENT: no such file or directory, stat '/Users/xiaodai/Desktop/whos-that-pokemon-v2.0/client/build/index.html'}
app.use(express.static("client/public"));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemongame",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Start the API server
//todo: sockeIo need to get rid off sequelize part
// sequelize.sync({ force: false }).then(() => {
//   const server = app.listen(PORT, () => console.log('Now listening'));
//   io = socketIo(server);
//   //const io = socketIO(server)
//   io.on('connection', (socket) => {
//     console.log('User connected')

//     // Think about this as an event listener
//     socket.on('chat message', (data, user_name) => {
//       // Sends the message to the client
//       io.emit('chat message', data, user_name)
//     })

//     socket.on('disconnect', () => {
//       console.log('User disconnected');
//     });
//   })
// });
