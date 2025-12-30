import { useState } from "react";

function EditPage() {
  const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  const courses = [
    { id: 1, title: "Intro to HTML" },
    { id: 2, title: "CSS Basics" }
  ];

  const [studentId, setStudentId] = useState(students[0].id);
  const [courseId, setCourseId] = useState(courses[0].id);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!studentId || !courseId) {
      setError("Please select a student and a course");
      setSuccess("");
      return;
    }
    const student = students.find(s => s.id === Number(studentId));
    const course = courses.find(c => c.id === Number(courseId));
    if (!student || !course) {
      setError("Invalid selection");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess(`${student.name} enrolled in ${course.title}`);
    setTimeout(() => setSuccess(""), 2500);
  };

  const isInvalid = !studentId || !courseId;

  return (
    <div className="dashboard">
      <h2>Enroll Student</h2>
      <form onSubmit={handleEnroll}>
        <label>Student</label><br />
        <select value={studentId} onChange={(e) => { setStudentId(e.target.value); setError(""); setSuccess(""); }}>
          {students.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <br /><br />
        <label>Course</label><br />
        <select value={courseId} onChange={(e) => { setCourseId(e.target.value); setError(""); setSuccess(""); }}>
          {courses.map(c => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>

        <br /><br />
        <button type="submit" disabled={isInvalid}>Enroll</button>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
      </form>
    </div>
  );
}

export default EditPage;
