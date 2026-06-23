import React, { useState } from "react";

function MarksPortal() {
  const [numSubjects, setNumSubjects] = useState(0);
  const [marks, setMarks] = useState([]);
  const [result, setResult] = useState(null);

  const handleNumSubjectsChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumSubjects(count);
    setMarks(Array(count).fill(""));
  };

  const handleMarksChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  const calculateResult = () => {
    const numericMarks = marks.map((m) => parseFloat(m) || 0);
    const total = numericMarks.reduce((acc, val) => acc + val, 0);
    const avg = total / numSubjects;

    let grade;
    if (avg >= 90) grade = "A+";
    else if (avg >= 75) grade = "A";
    else if (avg >= 60) grade = "B";
    else if (avg >= 40) grade = "C";
    else grade = "F";

    setResult({ total, avg, grade });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "beige", borderRadius: "8px", textDecoration:"none" }}>
      <h2>Student Marks Portal</h2>
      <label>
        Enter number of subjects:{" "}
        <input
          type="number"
          placeholder="Enter number of subjects"
          value={numSubjects}
          onChange={handleNumSubjectsChange}
        />
      </label>

      {marks.map((mark, index) => (
        <div key={index} style={{textDecoration:"none" }}>
          <label>
            Subject {index + 1} Marks:{" "}
            <input
              type="number"
              placeholder={`Enter marks`}
              value={mark}
              onChange={(e) => handleMarksChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}

      <button onClick={calculateResult}>Calculate</button>

      {result && (
        <div style={{ marginTop: "20px" , textDecoration:"none" }}>
          <p>Total Marks: {result.total}</p>
          <p>Average: {result.avg}</p>
          <p>Grade: {result.grade}</p>
        </div>
      )}
    </div>
  );
}

export default MarksPortal;
