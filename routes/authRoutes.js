const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', protect, restrictTo('Admin'), registerUser);
router.post('/login', loginUser);

module.exports = router;