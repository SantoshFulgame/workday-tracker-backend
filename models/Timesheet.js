const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  weekStart: { type: Date, required: true },
  entries: [{
    date: { type: Date, required: true },
    task: { type: String, required: true },
    hours: { type: Number, required: true },
  }],
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Timesheet', timesheetSchema);