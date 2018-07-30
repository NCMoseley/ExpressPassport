const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
// define the model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// encrypt password

// Runs before save hook is run

// Due to the nature of this in an arrow function you can't use () => for Mongoose hooks. this in arrow functions aren't rebindable, but Mongoose wants to rebind this to be the document being saved.

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      // overwrite password with encrypted password
      user.password = hash;
      next();
    });
  });
});

// Check to see if password is a match when loggin in
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// create model class

const ModelClass = mongoose.model('user', userSchema);

// export the model

module.exports = ModelClass;
