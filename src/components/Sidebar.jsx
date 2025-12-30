function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setPage("dashboard")}>Dashboard</li>
        <li onClick={() => setPage("courses")}>Courses</li>
        <li onClick={() => setPage("students")}>Students</li>
        <li onClick={() => setPage("enroll")}>Enroll</li>
      </ul>
    </div>
  );
}

export default Sidebar;
