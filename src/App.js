import Subjects from "./components/Subjects";
import Materials from "./components/Materials";
import Date from "./components/Date";
import Quote from "./components/Quote";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>📅 Richard School Calendar</h1>
      <Date />
      <Quote />
      <div className="content">
        <Subjects />
        <Materials />
      </div>
    </div>
  );
}

export default App;
