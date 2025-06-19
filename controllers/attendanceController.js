const Attendance = require('../models/Attendance');

const clockIn = async (req, res, next) => {
  try {
    const { employeeId } = req.user;
    const today = new Date().setHours(0, 0, 0, 0);
    const existing = await Attendance.findOne({ employeeId, date: { $gte: today } });
    if (existing) {
      res.status(400);
      throw new Error('Already clocked in today');
    }
    const attendance = await Attendance.create({ employeeId, clockIn: new Date() });
    res.status(201).json(attendance);
  } catch (error) {
    next(error);
  }
};

const clockOut = async (req, res, next) => {
  try {
    const { employeeId } = req.user;
    const today = new Date().setHours(0, 0, 0, 0);
    const attendance = await Attendance.findOne({ employeeId, date: { $gte: today } });
    if (!attendance || attendance.clockOut) {
      res.status(400);
      throw new Error('Invalid clock-out request');
    }
    attendance.clockOut = new Date();
    attendance.totalHours = (attendance.clockOut - attendance.clockIn) / (1000 * 60 * 60);
    await attendance.save();
    res.json(attendance);
  } catch (error) {
    next(error);
  }
};

const getAttendanceHistory = async (req, res, next) => {
  try {
    const { employeeId } = req.user;
    const attendance = await Attendance.find(
      req.user.role === 'Employee' ? { employeeId } : {}
    ).populate('employeeId', 'name');
    res.json(attendance);
  } catch (error) {
    next(error);
  }
};

module.exports = { clockIn, clockOut, getAttendanceHistory };