import styles from "./AcademicOverview.module.css";

export default function AcademicOverview({ schools = [] }) {
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
            {schools.map((school) => (
              <tr key={school.id}>
                <td className={styles.schoolName}>{school.name}</td>
                <td>{school.studentCount}</td>
                <td>{school.teacherCount}</td>
                <td>{school.gradeCount}</td>
                <td>
                  <div className={styles.enrollmentBar}>
                    <div
                      className={styles.enrollmentFill}
                      style={{ width: `${school.enrollmentRate}%` }}
                    ></div>
                    <span className={styles.enrollmentText}>{school.enrollmentRate}%</span>
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
