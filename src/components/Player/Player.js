import React, { useState } from "react";
import ShowPlayer from "../ShowPlayer/ShowPlayer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Player.css";

const Player = (props) => {
  const { image, name, age, playingType, salary } = props.player;
  // console.log(props.player);
  const [counter, setCounter] = useState(0);
  const [addPlayerInfo, setAddPlayerInfo] = useState([]);

  // Button Event
  const addBtn = (addPlayer) => {
    setCounter(counter + 1);
    const newPlayerInfo = [...addPlayerInfo, addPlayer];
    setAddPlayerInfo(newPlayerInfo);
  };
  return (
    <>
      <section className="container">
        <div className="row main-content">
          <div className="col-md-2">
            <img
              src={image}
              className="d-flex align-items-center justify-content-center player-img"
              alt="playerImage"
            />
          </div>
          <div className="col-md-6">
            <h4 className="player-title">{name}</h4>
            <p>
              <small className="player-text">Age: {age}</small>
            </p>
            <p>
              <small className="player-text">Playing Type: {playingType}</small>
            </p>
            <h5 className="player-text">Salary: {salary} BDT</h5>
            <button
              className="btn btn-warning"
              onClick={() => addBtn(props.player)}
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Player
            </button>
          </div>
          <div className="col-md-4">
            <h4>Player Select:{counter}</h4>
            <ShowPlayer addPlayerInfo={addPlayerInfo} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Player;
