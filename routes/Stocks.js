const express = require('express');
const { body, validationResult } = require('express-validator');
const Stock = require('../models/Stock');
const router = express.Router();

router.post(
  '/',
  body('symbol')
    .exists({ checkFalsy: true })
    .bail()
    .isString()
    .bail()
    .isLength({ min: 1, max: 5 })
    .bail()
    .matches(/^[A-Z]{1,5}$/),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const symbol = req.body.symbol;
      const stock = new Stock({ symbol });
      await stock.save();
      res.status(201).json({ symbol: stock.symbol });
    } catch (err) {
      if (err.code === 11000) return res.status(409).json({ error: 'Stock already in watchlist' });
      next(err);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const list = await Stock.find().sort({ createdAt: -1 }).select('symbol -_id').lean();
    res.json({ stocks: list.map(s => s.symbol) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;