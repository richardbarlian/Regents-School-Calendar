import React, { useEffect, useState } from "react";
import { daysAndSubjects, subjectsAndMaterials, day } from "../constants";

function Materials() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(daysAndSubjects[day]);
  }, []);

  const materials = [];

  if (subjects) {
    subjects.forEach((subject) => {
      subjectsAndMaterials[subject].forEach((material) => {
        if (!materials.includes(material)) {
          materials.push(material);
        }
      });
    });
  }

  return (
    <div>
      <h2>Materials</h2>
      <ul>
        {subjects ? (
          materials.map((material) => {
            return <li>📚 {material}</li>;
          })
        ) : (
          <li className="no_subjects">No materials needed today!</li>
        )}
      </ul>
    </div>
  );
}

export default Materials;
