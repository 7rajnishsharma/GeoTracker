const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
  coordinates: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
  timestamp: { type: Date, default: Date.now },
});

locationSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Location', locationSchema);