import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  let template = null;

  switch (props.type) {
    case "loadmore":
      template = (
        <div className="btn-blue-btn" onClick={props.loadMore}>
          {props.btnText}
        </div>
      );
      break;

    case "linkTo":
      template = (
        <Link to={props.linkTo} className="btn-blue-btn">
          {props.btnText}
        </Link>
      );
      break;
    default:
      template = null;
  }

  return template;
};

export default Button;
