const { buildDashboardPayload } = require('../services/dashboard.service');

async function getDashboard(req, res) {
  try {
    const payload = buildDashboardPayload();

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json({
      message: 'Unable to load dashboard data',
      error: error.message,
    });
  }
}

module.exports = {
  getDashboard,
};
