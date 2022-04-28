import { useState } from "react";
import Subjects from "./components/Subjects";
import Materials from "./components/Materials";
import Date from "./components/Date";
import Quote from "./components/Quote";
import Selector from "./components/Selector";
import { day } from "./constants";
import "./App.css";

function App() {
  const [date, setDate] = useState(day);

  return (
    <div className="App">
      <h1>📅 Richard School Calendar</h1>
      <Date date={date} />
      <Selector setDate={setDate} />
      <Quote />
      <div className="content">
        <Subjects date={date} />
        <Materials date={date} />
      </div>
    </div>
  );
}

export default App;
