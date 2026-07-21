const { buildDashboardPayload } = require('../services/dashboard.service');

async function getDashboard(req, res) {
  try {
    const payload = buildDashboardPayload({
      students: 1250,
      teachers: 85,
      schools: 5,
      enrollments: 1180,
      term: 'Term 2, 2024',
      pendingTasks: 12,
      schoolRows: [
        {
          id: 'school-1',
          name: 'Central High School',
          studentCount: 450,
          teacherCount: 30,
          gradeCount: 6,
          enrollmentRate: 98,
        },
        {
          id: 'school-2',
          name: 'St. Mary\'s Academy',
          studentCount: 380,
          teacherCount: 25,
          gradeCount: 5,
          enrollmentRate: 95,
        },
        {
          id: 'school-3',
          name: 'Green Valley School',
          studentCount: 220,
          teacherCount: 15,
          gradeCount: 3,
          enrollmentRate: 92,
        },
      ],
      activities: [
        {
          id: 'activity-1',
          title: 'New enrollment',
          description: 'John Doe enrolled in Grade 10A.',
          timestamp: '2026-07-21T10:00:00.000Z',
        },
        {
          id: 'activity-2',
          title: 'Grade submission',
          description: 'Mathematics grades were submitted for Grade 10A.',
          timestamp: '2026-07-21T06:30:00.000Z',
        },
        {
          id: 'activity-3',
          title: 'Teacher assigned',
          description: 'Mrs. Johnson was assigned to Grade 11B.',
          timestamp: '2026-07-20T16:15:00.000Z',
        },
      ],
    });

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
