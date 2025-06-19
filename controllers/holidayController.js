const Holiday = require('../models/Holiday');

const addHoliday = async (req, res, next) => {
  try {
    const { name, date } = req.body;
    const holiday = await Holiday.create({
      name,
      date,
      createdBy: req.user._id,
    });
    res.status(201).json(holiday);
  } catch (error) {
    next(error);
  }
};

const getHolidays = async (req, res, next) => {
  try {
    const holidays = await Holiday.find({}).populate('createdBy', 'name');
    res.json(holidays);
  } catch (error) {
    next(error);
  }
};

module.exports = { addHoliday, getHolidays };