import { useEffect, useState } from "react";
import { daysAndSubjects, subjectsAndMaterials } from "../constants";

function Materials({ date }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(daysAndSubjects[date]);
  }, [date]);

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
    <div className="materials">
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
