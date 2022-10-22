import { NavLink } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>How to Play</h1>
      <p>
        Once you start the game, you will immediately be presented with a
        picture and a prompt. The prompt will tell you to identify a specific
        number of objects in the image you are presented with. Your job is to
        then find these objects as quickly as possible. Once you have found an
        object, click on it in the image to submit your proposed location. If
        you are correct, you will see an alert letting you know you were correct
        and a pin will be placed on that object. If not, a red X will be placed
        there instead, and you will receive a 10 second time penalty. Once you
        have found all of the objects, your time will be recorded.
      </p>
      <h2>Good luck!</h2>
      <NavLink to="game">
        <div className="button button-secondary">Play Game!</div>
      </NavLink>
    </div>
  );
};

export default Home;
