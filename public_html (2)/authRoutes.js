const express = require('express');
const router = express.Router();
const authController = require('./authController');
const { verifyToken, verifyAdmin } = require('./authMiddleware');

router.post('/login', authController.login);
router.get('/rekap', verifyToken, verifyAdmin, (req, res) => {
  // Tambahkan logika pengambilan data rekap di sini
  res.json({ message: 'Data rekap berhasil diambil' });
});

module.exports = router;