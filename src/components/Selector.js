function Selector({ setDate }) {
  return (
    <div className="selector">
      Date Selector: &nbsp;
      <button onClick={() => setDate("Monday")}>Mo</button>
      <button onClick={() => setDate("Tuesday")}>Tu</button>
      <button onClick={() => setDate("Wednesday")}>We</button>
      <button onClick={() => setDate("Thursday")}>Th</button>
      <button onClick={() => setDate("Friday")}>Fr</button>
    </div>
  );
}

export default Selector;
