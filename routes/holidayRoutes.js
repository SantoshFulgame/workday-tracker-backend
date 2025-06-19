const express = require('express');
const { addHoliday, getHolidays } = require('../controllers/holidayController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, restrictTo('Admin'), addHoliday);
router.get('/', getHolidays);

module.exports = router;