const daysAndSubjects = {
  Monday: ["Math", "English", "Science"],
  Tuesday: ["Math", "English", "BI"],
  Wednesday: ["Science", "ICT", "BI"],
  Thursday: ["BI", "Math", "Science", "English"],
  Friday: ["CB", "Math", "English", "Science"],
};

const subjectsAndMaterials = {
  Math: ["Pencil Case", "Protractor", "Calculator", "Compass", "Math Lines & Square Notebook"],
  Science: ["Pencil Case", "Science Notebook", "Science Folder"],
  English: ["Pencil Case", "English Notebook", "English Folder"],
  ICT: ["Pencil Case", "Smart Notebook"],
  BI: ["Pencil Case", "BI Notebook", '"Menjadi Indonesia" Book'],
  CB: ["Pencil Case", "Smart Notebook"],
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const day = weekday[d.getDay()];

export { daysAndSubjects, subjectsAndMaterials, day };
