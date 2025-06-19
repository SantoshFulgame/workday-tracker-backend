require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Attendance = require('../models/Attendance');
const Leave = require('../models/Leave');
const Timesheet = require('../models/Timesheet');
const Holiday = require('../models/Holiday');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await User.deleteMany({});
    await Attendance.deleteMany({});
    await Leave.deleteMany({});
    await Timesheet.deleteMany({});
    await Holiday.deleteMany({});

    // Users
    const users = [
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4d1'),
        name: 'Arjun Sharma',
        email: 'arjun.sharma@techsolutions.in',
        password: bcrypt.hashSync('password123', 10),
        role: 'Employee',
        createdAt: new Date('2025-05-01T08:30:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4d2'),
        name: 'Priya Patel',
        email: 'priya.patel@techsolutions.in',
        password: bcrypt.hashSync('password123', 10),
        role: 'Manager',
        createdAt: new Date('2025-05-01T08:30:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4d3'),
        name: 'Vikram Singh',
        email: 'vikram.singh@techsolutions.in',
        password: bcrypt.hashSync('password123', 10),
        role: 'Admin',
        createdAt: new Date('2025-05-01T08:30:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4d4'),
        name: 'Neha Gupta',
        email: 'neha.gupta@techsolutions.in',
        password: bcrypt.hashSync('password123', 10),
        role: 'Employee',
        createdAt: new Date('2025-05-01T08:30:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4d5'),
        name: 'Rohit Verma',
        email: 'rohit.verma@techsolutions.in',
        password: bcrypt.hashSync('password123', 10),
        role: 'Employee',
        createdAt: new Date('2025-05-01T08:30:00Z'),
      },
    ];

    // Attendance
    const attendance = [
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4e1'),
        employeeId: users[0]._id,
        clockIn: new Date('2025-06-10T09:05:00Z'),
        clockOut: new Date('2025-06-10T17:45:00Z'),
        totalHours: 8.67,
        date: new Date('2025-06-10'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4e2'),
        employeeId: users[0]._id,
        clockIn: new Date('2025-06-11T08:50:00Z'),
        clockOut: new Date('2025-06-11T17:30:00Z'),
        totalHours: 8.67,
        date: new Date('2025-06-11'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4e3'),
        employeeId: users[3]._id,
        clockIn: new Date('2025-06-10T09:10:00Z'),
        clockOut: new Date('2025-06-10T18:15:00Z'),
        totalHours: 9.08,
        date: new Date('2025-06-10'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4e4'),
        employeeId: users[3]._id,
        clockIn: new Date('2025-06-12T09:00:00Z'),
        clockOut: new Date('2025-06-12T17:00:00Z'),
        totalHours: 8,
        date: new Date('2025-06-12'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4e5'),
        employeeId: users[4]._id,
        clockIn: new Date('2025-06-10T08:55:00Z'),
        clockOut: new Date('2025-06-10T17:50:00Z'),
        totalHours: 8.92,
        date: new Date('2025-06-10'),
      },
    ];

    // Leaves
    const leaves = [
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4f1'),
        employeeId: users[0]._id,
        leaveType: 'Sick',
        startDate: new Date('2025-06-15'),
        endDate: new Date('2025-06-16'),
        reason: 'Fever and medical consultation',
        status: 'Pending',
        createdAt: new Date('2025-06-10T10:15:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4f2'),
        employeeId: users[3]._id,
        leaveType: 'Casual',
        startDate: new Date('2025-06-18'),
        endDate: new Date('2025-06-19'),
        reason: 'Attending sister’s wedding',
        status: 'Approved',
        approvedBy: users[1]._id,
        createdAt: new Date('2025-06-08T14:00:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4f3'),
        employeeId: users[4]._id,
        leaveType: 'Other',
        startDate: new Date('2025-06-25'),
        endDate: new Date('2025-06-27'),
        reason: 'Personal travel to hometown',
        status: 'Rejected',
        approvedBy: users[2]._id,
        createdAt: new Date('2025-06-09T09:45:00Z'),
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4f4'),
        employeeId: users[0]._id,
        leaveType: 'Casual',
        startDate: new Date('2025-06-20'),
        endDate: new Date('2025-06-20'),
        reason: 'Family function',
        status: 'Approved',
        approvedBy: users[1]._id,
        createdAt: new Date('2025-06-07T11:30:00Z'),
      },
    ];

    // Timesheets
    const timesheets = [
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4g1'),
        employeeId: users[0]._id,
        weekStart: new Date('2025-06-09'),
        entries: [
          { date: new Date('2025-06-09'), task: 'Designed dashboard UI for Workday Tracker', hours: 4.5 },
          { date: new Date('2025-06-10'), task: 'Implemented authentication APIs', hours: 3.5 },
          { date: new Date('2025-06-11'), task: 'Fixed responsive design issues', hours: 3 },
          { date: new Date('2025-06-12'), task: 'Integrated attendance module', hours: 4 },
        ],
        status: 'Pending',
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4g2'),
        employeeId: users[3]._id,
        weekStart: new Date('2025-06-09'),
        entries: [
          { date: new Date('2025-06-09'), task: 'Created MongoDB schemas for leave module', hours: 5 },
          { date: new Date('2025-06-10'), task: 'Tested APIs using Postman', hours: 4 },
          { date: new Date('2025-06-11'), task: 'Documented API endpoints', hours: 3.5 },
        ],
        status: 'Approved',
        approvedBy: users[1]._id,
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4g3'),
        employeeId: users[4]._id,
        weekStart: new Date('2025-06-09'),
        entries: [
          { date: new Date('2025-06-09'), task: 'Developed timesheet submission form', hours: 4 },
          { date: new Date('2025-06-10'), task: 'Added validation for form inputs', hours: 3 },
          { date: new Date('2025-06-12'), task: 'Integrated Chart.js for reports', hours: 3.5 },
        ],
        status: 'Rejected',
        approvedBy: users[2]._id,
      },
    ];

    // Holidays
    const holidays = [
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4h1'),
        name: 'Republic Day',
        date: new Date('2025-01-26'),
        createdBy: users[2]._id,
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4h2'),
        name: 'Holi',
        date: new Date('2025-03-14'),
        createdBy: users[2]._id,
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4h3'),
        name: 'Diwali',
        date: new Date('2025-10-20'),
        createdBy: users[2]._id,
      },
      {
        _id: new mongoose.Types.ObjectId('60d5ec49f1a2c8b7b8f7c4h4'),
        name: 'Independence Day',
        date: new Date('2025-08-15'),
        createdBy: users[2]._id,
      },
    ];

    await User.insertMany(users);
    await Attendance.insertMany(attendance);
    await Leave.insertMany(leaves);
    await Timesheet.insertMany(timesheets);
    await Holiday.insertMany(holidays);

    console.log('Dummy data seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Seeding error:', error);
    mongoose.connection.close();
  }
};

seedData();