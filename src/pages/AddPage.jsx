import { useState } from "react";

function AddPage() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed === "") {
      setError("Name is required");
      setSuccess("");
      return;
    }
    // disallow digits in name
    if (/\d/.test(trimmed)) {
      setError("Name cannot contain numbers");
      setSuccess("");
      return;
    }
    const duplicate = students.some(s => s.name.toLowerCase() === trimmed.toLowerCase());
    if (duplicate) {
      setError("Student already exists");
      setSuccess("");
      return;
    }

    setStudents([...students, { id: Date.now(), name: trimmed }]);
    setName("");
    setError("");
    setSuccess(`${trimmed} added`);
    setTimeout(() => setSuccess(""), 2000);
  };

  const isInvalid = name.trim() === "" || students.some(s => s.name.toLowerCase() === name.trim().toLowerCase()) || /\d/.test(name);

  return (
    <div className="dashboard">
      <h2>Students</h2>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>

      <h3>Add Student</h3>
      <form onSubmit={handleAdd}>
        <input
          value={name}
          onChange={(e) => {
            const val = e.target.value;
            setName(val);
            setSuccess("");
            if (/\d/.test(val)) {
              setError("Name cannot contain numbers");
            } else {
              setError("");
            }
          }}
          placeholder="Name"
        />
        <button type="submit" disabled={isInvalid}>Add</button>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
      </form>
    </div>
  );
}

export default AddPage;
