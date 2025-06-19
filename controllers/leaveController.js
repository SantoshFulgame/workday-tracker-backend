const Leave = require('../models/Leave');

const applyLeave = async (req, res, next) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const leave = await Leave.create({
      employeeId: req.user._id,
      leaveType,
      startDate,
      endDate,
      reason,
    });
    res.status(201).json(leave);
  } catch (error) {
    next(error);
  }
};

const approveLeave = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const leave = await Leave.findById(id);
    if (!leave) {
      res.status(404);
      throw new Error('Leave request not found');
    }
    leave.status = status;
    leave.approvedBy = req.user._id;
    await leave.save();
    res.json(leave);
  } catch (error) {
    next(error);
  }
};

const getLeaveHistory = async (req, res, next) => {
  try {
    const leaves = await Leave.find(
      req.user.role === 'Employee' ? { employeeId: req.user._id } : {}
    ).populate('employeeId approvedBy', 'name');
    res.json(leaves);
  } catch (error) {
    next(error);
  }
};

module.exports = { applyLeave, approveLeave, getLeaveHistory };