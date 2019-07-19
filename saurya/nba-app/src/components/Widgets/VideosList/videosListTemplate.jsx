import React from "react";
import { Link } from "react-router-dom";
// import { CardInfo } from "../CardInfo/cardInfo";

const VideosListTemplate = props => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className="videos-list-item-wrapper">
          <div
            className="videos-list-left"
            style={{
              background: `url(/images/videos/${item.image})`
            }}
          >
            <div />
          </div>
          <div className="videos-list-right">
            <div>
              {/* <CardInfo teams={props.teams} team={item.team} date={item.date} /> */}
            </div>
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
};

export default VideosListTemplate;
