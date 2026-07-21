const test = require('node:test');
const assert = require('node:assert/strict');

const { buildDashboardPayload } = require('../src/services/dashboard.service');

test('buildDashboardPayload returns the expected dashboard structure', () => {
  const payload = buildDashboardPayload({
    students: 1250,
    teachers: 85,
    schools: 5,
    enrollments: 1180,
    term: 'Term 2, 2024',
    pendingTasks: 12,
    schoolRows: [
      {
        id: '1',
        name: 'Central High School',
        studentCount: 450,
        teacherCount: 30,
        gradeCount: 6,
        enrollmentRate: 98,
      },
    ],
    activities: [
      {
        id: 'a1',
        title: 'New enrollment',
        description: 'A new student joined Grade 10A.',
        timestamp: '2026-07-21T10:00:00.000Z',
      },
    ],
  });

  assert.equal(payload.stats.totalStudents, 1050);
  assert.equal(payload.stats.totalTeachers, 80);
  assert.equal(payload.stats.totalSchools, 5);
  assert.equal(payload.stats.activeEnrollments, 1180);
  assert.equal(payload.stats.currentTerm, 'Term 2, 2024');
  assert.equal(payload.stats.pendingTasks, 12);
  assert.equal(payload.schoolsOverview[0].name, 'Central High School');
  assert.equal(payload.recentActivity[0].title, 'New enrollment');
});
