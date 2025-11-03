const mongoose = require('mongoose');

async function connect(uri) {
  await mongoose.connect(uri);
  console.log("mongo db connected")
}

module.exports = { connect };