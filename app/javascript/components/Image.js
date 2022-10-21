import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Image = (props) => {
  const [showBox, setShowBox] = useState(false);
  const [characters, setCharacters] = useState([]);

  const API_URL = `/api/v1/games/${props.id}`;

  const loadData = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    setCharacters(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClick = (e) => {
    let xCoord;
    let yCoord;
    toggleBox();
    if (showBox) {
      hideBox();
    } else {
      xCoord = Math.max(0, e.nativeEvent.offsetX - 25);
      yCoord = Math.max(0, e.nativeEvent.offsetY - 25);
      const imageWidth = e.target.clientWidth;
      const imageHeight = e.target.clientHeight;
      const width = Math.min(50, imageWidth - xCoord);
      const height = Math.min(50, imageHeight - yCoord);
      displayBox(xCoord, yCoord, width, height);
    }
    // // Need to check if remaining non-captured characters are within box coordinates
    // let hit = fetch().then((response) => response.data);
    // if (hit === true) {
    //   displayCorrect(xCoord, yCoord);
    //   // Check if round ended
    //   let gameOver = fetch().then((response) => response.data);
    //   if (gameOver === true) {
    //      props.handleRoundFinish();
    //   }
    // } else {
    //   displayWrong(xCoord, yCoord);
    //   // Add time penalty
    // }
  };

  const displayCorrect = (x, y) => {
    let imageContainer = document.getElementById("image-container");
    let rightIcon = document.createElement("i");
    rightIcon.classList.add("fa-solid", "fa-thumbtack");
    rightIcon.height = "50px";
    rightIcon.width = "50px";
    rightIcon.position = "relative";
    rightIcon.left = `${x - 25}px`;
    rightIcon.top = `${y - 25}px`;
    imageContainer.appendChild(rightIcon);
  };

  const displayWrong = (x, y) => {
    let imageContainer = document.getElementById("image-container");
    let wrongIcon = document.createElement("i");
    wrongIcon.classList.add("fa-solid", "fa-circle-xmark");
    wrongIcon.height = "50px";
    wrongIcon.width = "50px";
    wrongIcon.position = "relative";
    wrongIcon.left = `${x - 25}px`;
    wrongIcon.top = `${y - 25}px`;
    wrongIcon.color = "red";
    imageContainer.appendChild(wrongIcon);
  };

  const displayBox = (originX, originY, width, height) => {
    let box = document.createElement("div");
    let imageContainer = document.getElementById("image-container");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.boxSizing = "border-box";
    box.style.position = "absolute";
    box.style.top = `${originY}px`;
    box.style.left = `${originX}px`;
    box.style.border = "2px solid red";
    box.className = "display-box";

    imageContainer.appendChild(box);
  };

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const hideBox = () => {
    let box = document.querySelector(".display-box");
    if (box) {
      box.parentElement.removeChild(box);
    }
  };

  return (
    <div id="image-container">
      <img
        src={props.image}
        alt=""
        id="game-image"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default Image;
