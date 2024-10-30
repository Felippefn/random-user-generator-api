const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./router'); // Ensure correct path if router.js is in the same directory

app.use('/api', router); // Use the router with /api prefix

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
