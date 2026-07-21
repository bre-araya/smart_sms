function buildDashboardPayload(data = {}) {
  return {
    stats: {
      totalStudents: data.students ?? 0,
      totalTeachers: data.teachers ?? 0,
      totalSchools: data.schools ?? 0,
      activeEnrollments: data.enrollments ?? 0,
      currentTerm: data.term ?? 'Current Term',
      pendingTasks: data.pendingTasks ?? 0,
    },
    schoolsOverview: (data.schoolRows ?? []).map((school) => ({
      id: school.id,
      name: school.name,
      studentCount: school.studentCount ?? 0,
      teacherCount: school.teacherCount ?? 0,
      gradeCount: school.gradeCount ?? 0,
      enrollmentRate: school.enrollmentRate ?? 0,
    })),
    recentActivity: (data.activities ?? []).map((activity) => ({
      id: activity.id,
      title: activity.title,
      description: activity.description,
      timestamp: activity.timestamp,
    })),
  };
}

module.exports = {
  buildDashboardPayload,
};
