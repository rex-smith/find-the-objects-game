import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";
import EndRoundModal from "./EndRoundModal.js";
import Images from "./images/index";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/images";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

const Game = () => {
  const [imageId, setImageId] = useState(0);
  const [image, setImage] = useState(Images[0]);
  const [roundOver, setRoundOver] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const getImage = (id) => {
    return Images.filter((image) => image.id === id);
  };

  useEffect(() => {
    let mounted = true;
    getAPIData().then((item) => {
      if (mounted) {
        setImage(item);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleRoundFinish = () => {
    toggleTimer();
    // Send result to database first
    setRoundOver(true);
  };

  const nextRound = () => {
    // Rotate through list of pictures fetching from server by ID
    setImageId((imageId) => imageId + 1);
    setImage(getImage(imageId));

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
      <h1>{image.title}</h1>
      <h3>{image.prompt}</h3>
      <div className="timer-container">
        <div className="time">{seconds}s</div>
      </div>
      <Image image={image.image} handleRoundFinish={handleRoundFinish} />
      {roundOver ? (
        <EndRoundModal timeResult={seconds} nextRound={nextRound} />
      ) : null}
    </div>
  );
};

export default Game;
