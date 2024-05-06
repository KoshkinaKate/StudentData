import React from "react";
import Score from "./Score";
function Learner({ data }) {
  return (
    <div className="student">
      <div className="flexer">
        <p className="dataTitle">{data.name}</p>
        <p className="dataset">{data.bio}</p>
      </div>
      <div className="scoreContainer">
        {data.scores.map((score) => {
          return <Score grade={score} />;
        })}
      </div>
    </div>
  );
}

export default Learner;