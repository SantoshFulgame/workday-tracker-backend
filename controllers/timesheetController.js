const Timesheet = require('../models/Timesheet');

const submitTimesheet = async (req, res, next) => {
  try {
    const { weekStart, entries } = req.body;
    const timesheet = await Timesheet.create({
      employeeId: req.user._id,
      weekStart,
      entries,
    });
    res.status(201).json(timesheet);
  } catch (error) {
    next(error);
  }
};

const approveTimesheet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const timesheet = await Timesheet.findById(id);
    if (!timesheet) {
      res.status(404);
      throw new Error('Timesheet not found');
    }
    timesheet.status = status;
    timesheet.approvedBy = req.user._id;
    await timesheet.save();
    res.json(timesheet);
  } catch (error) {
    next(error);
  }
};

const getTimesheets = async (req, res, next) => {
  try {
    const timesheets = await Timesheet.find(
      req.user.role === 'Employee' ? { employeeId: req.user._id } : {}
    ).populate('employeeId approvedBy', 'name');
    res.json(timesheets);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitTimesheet, approveTimesheet, getTimesheets };