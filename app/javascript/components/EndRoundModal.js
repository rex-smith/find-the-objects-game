import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const EndRoundModal = (props) => {
  const [name, setName] = useState("");
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const topRecords = () => {
    let top = records;
    top.sort((a, b) => a.time - b.time);
    if (top.length > 10) {
      top = top.slice(0, 10);
    }
    return top;
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = () => {
    axios.get(`/api/v1/games/${props.gameId}/records`).then((response) => {
      setRecords(response.data);
    });
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `/api/v1/games/${props.gameId}/records/${props.recordId}`,
        {
          username: name,
          time: props.time,
          game_id: props.gameId,
        },
        { headers: props.headers() }
      )
      .then((response) => {
        hideForm();
        loadRecords();
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Round Over!</h2>
        <div>Your time was: {props.timeResult} seconds</div>
        <div className="modal-results-table">
          <table></table>
        </div>
        <div className="modal-user-result-table">
          <table>
            <tbody>
              <tr className="record-header">
                <th>Rank</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
              {topRecords().map((record, index) => {
                return (
                  <tr key={record.id} className="record-row">
                    <td className="record-rank">{index + 1}.</td>
                    <td className="record-name">{record.username}</td>
                    <td className="record-time">{record.time.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {showForm ? (
          <form action="" onSubmit={handleSubmit} className="username-form">
            <div className="field">
              <label htmlFor="">Your Name</label>
              <input type="text" value={name} onChange={handleChange} />
            </div>
            <button type="submit" className="button button-primary">
              Submit
            </button>
          </form>
        ) : null}
        <div className="modal-button-container">
          <button
            onClick={props.nextRound}
            className="button button-secondary "
          >
            Next Round
          </button>
          <Link to="../records">
            <button className="button button-secondary">Records</button>
          </Link>
          <Link to="../">
            <button className="button button-secondary">Instructions</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EndRoundModal;
