import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";
import EndRoundModal from "./EndRoundModal.js";
import Images from "./images/index";
import axios from "axios";

function headers() {
  return {
    "X-CSRF-Token": document.head.querySelector("[name=csrf-token]").content,
    "Content-Type": "application/json",
  };
}

const Game = () => {
  const [imageId, setImageId] = useState(1);
  const [image, setImage] = useState(Images[0]);
  const [roundOver, setRoundOver] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [timeResult, setTimeResult] = useState(0);
  const [recordId, setRecordId] = useState(0);
  const [penalty, setPenalty] = useState(0);

  useEffect(() => {
    setImage(getImage(imageId));
  }, [imageId]);

  const getImage = (id) => {
    return Images.find((image) => image.id === id - 1);
  };

  const clearIcons = () => {
    let icons = document.querySelectorAll(".fa-solid");
    icons.forEach((icon) => {
      icon.remove();
    });
  };

  const handleRoundFinish = () => {
    toggleTimer();
    clearIcons();
    setTimeResult(milliseconds / 100 + penalty);

    axios
      .post(
        `/api/v1/games/${imageId}/records`,
        {
          time: `${milliseconds / 100 + penalty}`,
          username: "Anonymous",
        },
        { headers: headers() }
      )
      .then((response) => {
        console.log(response.data);
        setRecordId(response.data.id);
      });

    setRoundOver(true);
  };
  const nextRound = () => {
    if (imageId < Images.length - 1) {
      setImageId((imageId) => imageId + 1);
    } else {
      setImageId(1);
    }
    clearIcons();
    setRoundOver(false);
    resetTimer();
  };

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function resetTimer() {
    setMilliseconds(0);
    setPenalty(0);
    setIsActive(true);
  }

  const handlePenalty = () => {
    setPenalty((penalty) => penalty + 10);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMilliseconds((milliseconds) => milliseconds + 1);
      }, 10);
    } else if (!isActive && milliseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, milliseconds]);

  return (
    <div>
      <div className="title-timer-container">
        <h1>{image.title}</h1>
        <div className="penalty-container">
          <div className="penalty">Penalty: + {penalty}s</div>
        </div>
        <div className="timer-container">
          <div className="time">{(milliseconds / 100).toFixed(0)}s</div>
        </div>
      </div>
      <h3>{image.prompt}</h3>
      <Image
        image={image.image}
        id={imageId}
        handleRoundFinish={handleRoundFinish}
        handlePenalty={handlePenalty}
      />
      {roundOver ? (
        <EndRoundModal
          gameId={imageId}
          recordId={recordId}
          timeResult={timeResult}
          nextRound={nextRound}
          headers={headers}
        />
      ) : null}
      <button className="button button-secondary" onClick={nextRound}>
        Next Picture
      </button>
    </div>
  );
};

export default Game;
