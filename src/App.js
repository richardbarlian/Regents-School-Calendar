import Subjects from "./components/Subjects";
import Materials from "./components/Materials";
import Date from "./components/Date";
import Quote from "./components/Quote";
import "./App.css";
import Selector from "./components/Selector";
import { useState } from "react";
import { day } from "./constants";

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
