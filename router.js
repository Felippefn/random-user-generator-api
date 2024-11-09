const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data
const data = JSON.parse(fs.readFileSync('/data/random_names_v2.json', 'utf8'))[0];

// Helper function to pick a random item from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

function randomNumberGenerator() {
  let sequence = '';
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    sequence += randomNum; // Append the number to the sequence string
  }
  return sequence;
}

// Route to get a random user
router.get('/random-user', (req, res) => {
  const firstName = getRandomElement(data.first_name);
  const lastName = getRandomElement(data.last_name);
  const emailProvider = getRandomElement(data.email);
  const country = getRandomElement(data.country);

  const phone = randomNumberGenerator();
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailProvider}.com`;

  res.json({ first_name: firstName, last_name: lastName, email: email, phone_number: phone, country: country });

});

module.exports = router;