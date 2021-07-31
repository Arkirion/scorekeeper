import React, { useState } from "react";
import "./PlayerCard.scss";
import { OPERATIONS } from "../../enum";
import PointsForm from "../PointsForm/PointsForm";

export default function PlayerCard({name, currentPoints, color}) {
  const [points, setPoints] = useState(currentPoints);

  const backgroundColor = { backgroundColor: color};
  function handleIncrement() {
    setPoints((prevCount) => prevCount + 1);
  }

  const handleDecrement = () => {
    setPoints((prevCount) => prevCount - 1);
  };

  return (
    <div className="player-card montserrat" style={backgroundColor}>
      <div className="general-row">
        <section className="info">
          <div className="name">{name}</div>
          <div className="points">{points}</div>
        </section>
        <section className="actions">
          {/* TODO : hacer que sea un prop child */}
          <div onClick={handleIncrement}>+1</div>
          <PointsForm
            sign={OPERATIONS.ADD}
            setPoints={setPoints}
            currentPoints={points}
          />
          <div onClick={handleDecrement}>-1</div>
          <PointsForm
            sign={OPERATIONS.SUBSTRACT}
            setPoints={setPoints}
            currentPoints={points}
          />
        </section>
      </div>
      {/* <section className="more">
        TODO
      </section> */}
    </div>
  );
}
