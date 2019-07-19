import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import "./sideNav_items.css";

const SideNavItems = () => {
  const items = [
    {
      type: "navitem-options",
      icon: "home",
      text: "Home",
      link: "/"
    },

    {
      type: "navitem-options",
      icon: "newspaper",
      text: "News",
      link: "/news"
    },

    {
      type: "navitem-options",
      icon: "play",
      text: "Videos",
      link: "/videos"
    },

    {
      type: "navitem-options",
      icon: "arrow-right",
      text: "Sign In",
      link: "/sign-in"
    },

    {
      type: "navitem-options",
      icon: "arrow-left",
      text: "Sign Out",
      link: "/sign-out"
    }
  ];

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showItems()}</div>;
};

export default SideNavItems;
