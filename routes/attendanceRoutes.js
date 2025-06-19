const express = require('express');
const { clockIn, clockOut, getAttendanceHistory } = require('../controllers/attendanceController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/clock-in', protect, restrictTo('Employee'), clockIn);
router.post('/clock-out', protect, restrictTo('Employee'), clockOut);
router.get('/history', protect, getAttendanceHistory);

module.exports = router;