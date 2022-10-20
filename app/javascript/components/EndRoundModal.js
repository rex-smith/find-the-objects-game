import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const EndRoundModal = (props) => {
  // Need to retrieve the records for the table
  // Check if top 10 record, if so: let them input their name, and show top 10
  // Either way, show modal with time and ranking with 'Next Image" button below
  // and a 'Records" and "Instructions"

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to server
    // Refresh name in records
    // Hide form
  };

  return (
    <div className="end-round-modal">
      <h2>Round Over!</h2>
      <div>Your time was: {props.timeResult} seconds</div>
      <div className="modal-results-table">
        <table></table>
      </div>
      <div className="modal-user-result-table">
        <table></table>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" value={name} />
        <button type="submit" onChange={handleChange}>
          Submit
        </button>
      </form>
      <div className="modal-button-container">
        <button onClick={props.nextRound}>Next Round</button>
        <Link to="../records">
          <button className="button">Records</button>
        </Link>
        <Link to="../">
          <button className="button">Instructions</button>
        </Link>
      </div>
    </div>
  );
};

export default EndRoundModal;
