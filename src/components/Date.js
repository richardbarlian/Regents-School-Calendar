import { day } from "../constants";

function Date({ date }) {
  return date !== day ? (
    <div className="date">
      👋 Viewing {date}, Today is {day}
    </div>
  ) : (
    <div className="date">
      👋 Viewing today
    </div>
  );
}

export default Date;
