import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playgroundImage from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-4 flex flex-col items-center">
      <h2 className="font-bold mb-5">Q-zone</h2>
      <div className="space-y-5 items-center">
        <img src={swimmingImage} alt="Swimming" />
        <img src={classImage} alt="Class" />
        <img src={playgroundImage} alt="Playground" />
      </div>
    </div>
  );
};

export default Qzone;
