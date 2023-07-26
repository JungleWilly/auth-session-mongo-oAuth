const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect(
  'mongodb://localhost:27019'
);
