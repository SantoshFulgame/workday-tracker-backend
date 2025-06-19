const express = require('express');
const { applyLeave, approveLeave, getLeaveHistory } = require('../controllers/leaveController');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/apply', protect, restrictTo('Employee'), applyLeave);
router.put('/approve/:id', protect, restrictTo('Manager', 'Admin'), approveLeave);
router.get('/history', protect, getLeaveHistory);

module.exports = router;