import React from "react";
import FontAwesome from "react-fontawesome";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.id === team;
    });
    return data.name;
  };

  return (
    <div className="card-info">
      <span className="team-name">{teamName(props.teams, props.team)}</span>
      <span className="team-date">
        <FontAwesome name="clock" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
