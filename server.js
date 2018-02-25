const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema;
const PORT = process.env.PORT || 5000

mongoose.connect('mongodb://Artur:123test@ds249128.mlab.com:49128/heroku-app');

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
/*
const kenny = new User({
  name: 'Kenny',
  username: 'Kenny_the_boy',
  password: 'password'
});

kenny.save(function(err) {
  if (err) throw err;

  console.log('Uzytkownik zapisany pomyslnie');
});
*/

app.get('/', (req, res) => res.send('hello heroku'));
  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
