import { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the date
  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return <span className="text-xl">{formatDate(currentDate)}</span>;
};

export default DateTimeDisplay;
