const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./authRoutes');
const connection = require('./db');

dotenv.config();

const app = express();

app.use(express.json());

// Rute autentikasi
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});