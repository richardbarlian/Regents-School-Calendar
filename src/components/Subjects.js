import React, { useEffect, useState } from "react";
import { daysAndSubjects } from "../constants";

function Subjects({ date }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(daysAndSubjects[date]);
  }, [date]);

  return (
    <div>
      <h2>Subjects</h2>
      <ul>
        {subjects ? (
          subjects.map((subject) => {
            return <li>✏️ {subject}</li>;
          })
        ) : (
          <li className="no_subjects">No Subjects Today!</li>
        )}
      </ul>
    </div>
  );
}

export default Subjects;
