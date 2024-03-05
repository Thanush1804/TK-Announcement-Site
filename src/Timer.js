import { Countdown } from "./Countdown";

export const Timer = () => {
  const today = new Date("May 5, 2024"); // Get the current date
  const futureDate = new Date(today); // Create a new date object
  futureDate.setDate(today.getDate());

  return (
    <div className="eventDiv">
      <h1 className="eventTitle">
        Next Event : <span>NEET Exam</span>
      </h1>
        <Countdown className="TimerDiv" date={futureDate} />
    </div>
  );
};
