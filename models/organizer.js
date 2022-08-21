const mongoose = require('mongoose');
const { isEmail, isURL } = require('validator');
const bcrypt = require('bcryptjs');

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
    default: '',
    maxLength: 1000,
    trim: true
  },
  website: {
    type: String,
    trim: true,
    default: '',
    maxLength: 200,
    validate(value) {
      if (value !== '' && !isURL(value)) throw new Error('Website URL is invalid');
    }
  }
});

// Mongoose middleware - pre or post hooks
organizerSchema.pre('save', async function(next) {
  const organizer = this;

  // since the pre save middleware runs also when updating an organizer,
  // we only want to rehash the password if the password were updated
  if (organizer.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    organizer.password = await bcrypt.hash(organizer.password, salt);
  }

  // next makes sure the operation ('save' in this case) will run after the async operations are done.
  return next();

});

module.exports = mongoose.model('Organizer', organizerSchema);