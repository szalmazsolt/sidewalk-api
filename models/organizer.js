const mongoose = require('mongoose');
const { isEmail, isURL } = require('validator');

const organizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!isEmail(value)) throw new Error('Email is invalid');
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes('password')) throw new Error('Password must not include "password"');
    }
  },
  description: {
    type: String,
    maxLength: 1000,
    trim: true
  },
  website: {
    type: String,
    trim: true,
    maxLength: 200,
    validate(value) {
      if (!isURL(value)) throw new Error('Website URL is invalid');
    }
  }
});

module.exports = mongoose.model('Organizer', organizerSchema);