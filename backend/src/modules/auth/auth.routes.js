const express = require('express');
const {
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  getProfile,
} = require('./auth.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/change-password', authMiddleware, changePassword);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
