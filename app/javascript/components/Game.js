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
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [timeResult, setTimeResult] = useState(0);
  const [recordId, setRecordId] = useState(0);

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
    setTimeResult(seconds);

    axios
      .post(
        `/api/v1/games/${imageId}/records`,
        {
          time: `${timeResult}`,
          username: "Current User",
        },
        { headers: headers() }
      )
      .then((response) => {
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
    toggleTimer();
  };

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function resetTimer() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div className="title-timer-container">
        <h1>{image.title}</h1>
        <div className="timer-container">
          <div className="time">{seconds}s</div>
        </div>
      </div>
      <h3>{image.prompt}</h3>
      <Image
        image={image.image}
        id={imageId}
        handleRoundFinish={handleRoundFinish}
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
