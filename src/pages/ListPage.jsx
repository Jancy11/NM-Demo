function ListPage() {
  const courses = [
    { id: 1, title: "Intro to HTML" },
    { id: 2, title: "CSS Basics" },
    { id: 3, title: "JavaScript Fundamentals" }
  ];

  return (
    <div className="dashboard">
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
