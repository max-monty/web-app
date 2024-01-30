import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [groupSize, setGroupSize] = useState(2);
  const [groups, setGroups] = useState([]);

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleGroupSizeChange = (event) => {
    setGroupSize(Number(event.target.value));
  };

  const addStudent = () => {
    if (studentName && !students.includes(studentName)) {
      setStudents([...students, studentName]);
      setStudentName('');
    }
  };

  const generateGroups = () => {
    let shuffledStudents = [...students].sort(() => 0.5 - Math.random());
    let generatedGroups = [];

    while (shuffledStudents.length) {
      generatedGroups.push(shuffledStudents.splice(0, groupSize));
    }

    setGroups(generatedGroups);
  };

  return (
    <div className="App">
      <h1>Student Group Creator</h1>
      <div>
        <input
          type="text"
          value={studentName}
          onChange={handleStudentNameChange}
          placeholder="Enter student name"
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div>
        <label>
          Group Size:
          <select value={groupSize} onChange={handleGroupSizeChange}>
            {[2, 3, 4, 5].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={generateGroups}>Generate Groups</button>

      <div className="groups">
        {groups.map((group, index) => (
          <div key={index} className="group">
            <h3>Group {index + 1}</h3>
            <ul>
              {group.map((student, idx) => (
                <li key={idx}>{student}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
