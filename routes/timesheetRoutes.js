const express = require('express');
const { submitTimesheet, approveTimesheet, getTimesheets } = require('../controllers/timesheetController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/submit', protect, restrictTo('Employee'), submitTimesheet);
router.put('/approve/:id', protect, restrictTo('Manager', 'Admin'), approveTimesheet);
router.get('/', protect, getTimesheets);

module.exports = router;