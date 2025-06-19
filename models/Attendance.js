const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clockIn: { type: Date },
  clockOut: { type: Date },
  totalHours: { type: Number },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attendance', attendanceSchema);