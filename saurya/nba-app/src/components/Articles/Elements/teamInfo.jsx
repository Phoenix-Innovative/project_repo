import React from "react";

const TeamInfo = props => {
  return (
    <div className="article-team-header">
      <div
        className="article-header-left"
        style={{
          background: `url('/images/teams/${props.team.logo}')`
        }}
      />
      <div className="article-header-right">
        <div>
          <span>{props.team.city}</span>
          <span>{props.team.name}</span>
        </div>
        <div>
          <strong>
            W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
