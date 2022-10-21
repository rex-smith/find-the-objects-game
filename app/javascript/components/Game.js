import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";
import EndRoundModal from "./EndRoundModal.js";
import Images from "./images/index";
import axios from "axios";

// const API_URL = "api/v1/games";

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }

const Game = () => {
  const [imageId, setImageId] = useState(1);
  const [image, setImage] = useState(Images[0]);
  const [roundOver, setRoundOver] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const getImage = (id) => {
    return Images.find((image) => image.id === id - 1);
  };

  useEffect(() => {
    let mounted = true;
    // getAPIData().then((item) => {
    //   if (mounted) {
    //     setImage(item);
    //   }
    // });
    setImage(getImage(imageId));
  }, [imageId]);

  const handleRoundFinish = () => {
    toggleTimer();
    // Send result to database first
    setRoundOver(true);
  };
  const nextRound = () => {
    // Rotate through list of pictures fetching from server by ID
    if (imageId < Images.length - 1) {
      setImageId((imageId) => imageId + 1);
    } else {
      setImageId(1);
    }

    // Fetch image, character locations
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
        <EndRoundModal timeResult={seconds} nextRound={nextRound} />
      ) : null}
      <button className="button" onClick={nextRound}>
        Next Picture
      </button>
    </div>
  );
};

export default Game;
