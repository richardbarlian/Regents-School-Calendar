import { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip.advice;

        setQuote(advice);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return <div className="quote">Random quote for the day: {quote}</div>;
}

export default Quote;
