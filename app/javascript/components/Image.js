import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const validAreaWidth = 0.05;

const Image = (props) => {
  const [characters, setCharacters] = useState([]);
  const [hits, setHits] = useState([]);

  const API_URL = `/api/v1/games/${props.id}/characters`;

  const loadData = async () => {
    const response = await axios.get(API_URL);
    setCharacters(response.data);
    let newHits = new Array(response.data.length).fill(0);
    setHits(newHits);
  };

  useEffect(() => {
    loadData();
    let box;
    if (!document.querySelector(".display-box")) {
      box = document.createElement("div");
    } else {
      box = document.querySelector(".display-box");
    }
    box.classList.add("display-box", "hidden");
    box.style.boxSizing = "border-box";
    box.style.position = "absolute";
    box.style.border = "2px solid red";
    let imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(box);
  }, [props.image]);

  const coordinatesToPercentages = (e) => {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercentage = x / width;
    const yPercentage = y / height;
    return { xPercentage, yPercentage };
  };

  const handleClick = (e) => {
    let imageContainer = document.getElementById("image-container");
    let imageWidth = imageContainer.getBoundingClientRect().width;
    const { xPercentage, yPercentage } = coordinatesToPercentages(e);
    // displayBox(xPercentage, yPercentage, imageWidth);
    processClick(xPercentage, yPercentage); // Process to see if hit or miss and game over
  };

  const processClick = (xPercentage, yPercentage) => {
    let newHits = hits;
    let hit = false;
    characters.forEach((character, index) => {
      if (
        xPercentage >= character.x_location - validAreaWidth / 2 &&
        xPercentage <= character.x_location + validAreaWidth / 2 &&
        yPercentage >= character.y_location - validAreaWidth / 2 &&
        yPercentage <= character.y_location + validAreaWidth / 2
      ) {
        newHits[index] = 1;
        hit = true;
      }
    });
    setHits(newHits);
    if (hit) {
      displayCorrect(xPercentage, yPercentage);
    } else {
      props.handlePenalty();
      displayWrong(xPercentage, yPercentage);
    }
    if (newHits.every((hit) => hit === 1)) {
      props.handleRoundFinish();
    }
  };

  const displayBox = (xPercentage, yPercentage) => {
    let box = document.querySelector(".display-box");
    let originX = Math.max(0, xPercentage - 0.5 * validAreaWidth);
    let originY = Math.max(0, yPercentage - 0.5 * validAreaWidth);
    const width = Math.min(validAreaWidth, 100 - xPercentage);
    const height = Math.min(validAreaWidth, 100 - yPercentage);
    box.style.width = `${width * 100}%`;
    box.style.height = `${height * 100}%`;
    box.style.top = `${originY * 100}%`;
    box.style.left = `${originX * 100}%`;
    box.className = "display-box";
    box.style.zIndex = "1";
  };

  const displayCorrect = (xPercentage, yPercentage) => {
    let imageContainer = document.getElementById("image-container");
    let icon = displayIcon(xPercentage, yPercentage);
    icon.classList.add("fa-solid", "fa-thumbtack");
    icon.style.color = "green";
    icon.font;
    icon.style.fontSize = `${
      imageContainer.getBoundingClientRect().width * validAreaWidth
    }px`;
    imageContainer.appendChild(icon);
  };

  const displayIcon = (xPercentage, yPercentage) => {
    let icon = document.createElement("i");
    icon.style.height = `${validAreaWidth * 100}%`;
    icon.style.width = `${validAreaWidth * 100}%`;
    icon.style.position = "absolute";
    icon.style.left = `${(xPercentage - validAreaWidth / 2) * 100}%`;
    icon.style.top = `${(yPercentage - validAreaWidth / 2) * 100}%`;
    icon.style.textShadow =
      "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
    icon.style.zIndex = "1";
    return icon;
  };

  const displayWrong = (xPercentage, yPercentage) => {
    console.log("Displaying miss!");
    let imageContainer = document.getElementById("image-container");
    let icon = displayIcon(xPercentage, yPercentage);
    icon.style.color = "red";
    icon.style.fontSize = `${
      imageContainer.getBoundingClientRect().width * validAreaWidth
    }px`;
    icon.classList.add("fa-solid", "fa-circle-xmark");
    imageContainer.appendChild(icon);
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
