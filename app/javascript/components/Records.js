import React, { useEffect, useState } from "react";
import axios from "axios";
import Images from "./images/index";

function headers() {
  return {
    "X-CSRF-Token": document.head.querySelector("[name=csrf-token]").content,
    "Content-Type": "application/json",
  };
}

const Records = () => {
  const [games, setGames] = useState([]);

  const loadRecords = () => {
    axios.get("/api/v1/records/top").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  useEffect(() => {
    loadRecords();
  }, []);

  // Need to make sure image is aligned with records being reported
  // Need to see how the records will be returned

  return (
    <div>
      <h1>Records</h1>
      {games.map((game, index) => {
        return (
          <div key={index} className="records-game-container">
            <div className="column">
              <h2>{Images[index].title}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {game.map((record, index) => {
                    return (
                      <tr key={record.id}>
                        <td className="record-rank">{index + 1}</td>
                        <td className="record-name">{record.username}</td>
                        <td className="record-time">
                          {record.time.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="column">
              <div className="image-preview-container">
                <img
                  className="image-preview"
                  src={Images[index].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Records;
