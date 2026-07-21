import styles from "./AcademicOverview.module.css";

export default function AcademicOverview() {
  const academicData = [
    {
      id: 1,
      school: "Central High School",
      totalStudents: 450,
      totalTeachers: 30,
      activeGrades: 6,
      enrollment: 98,
    },
    {
      id: 2,
      school: "St. Mary's Academy",
      totalStudents: 380,
      totalTeachers: 25,
      activeGrades: 5,
      enrollment: 95,
    },
    {
      id: 3,
      school: "Green Valley School",
      totalStudents: 220,
      totalTeachers: 15,
      activeGrades: 3,
      enrollment: 92,
    },
  ];

  return (
    <div className={styles.academicOverview}>
      <div className={styles.header}>
        <h3>Schools Overview</h3>
        <select className={styles.filter}>
          <option>Current Term</option>
          <option>Last Term</option>
          <option>All Time</option>
        </select>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>School Name</th>
              <th>Students</th>
              <th>Teachers</th>
              <th>Grades</th>
              <th>Enrollment %</th>
            </tr>
          </thead>
          <tbody>
            {academicData.map((school) => (
              <tr key={school.id}>
                <td className={styles.schoolName}>{school.school}</td>
                <td>{school.totalStudents}</td>
                <td>{school.totalTeachers}</td>
                <td>{school.activeGrades}</td>
                <td>
                  <div className={styles.enrollmentBar}>
                    <div
                      className={styles.enrollmentFill}
                      style={{ width: `${school.enrollment}%` }}
                    ></div>
                    <span className={styles.enrollmentText}>{school.enrollment}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
