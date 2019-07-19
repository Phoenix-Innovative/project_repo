import React, { Component } from "react";
import NewsSlider from "../Widgets/NewsSlider/slider";
import NewsList from "../Widgets/NewsList/newsList";
import "../../../public/styles.css";

class NewsSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <NewsSlider
          type="featured"
          start={0}
          end={5}
          settings={{
            dots: true
          }}
        />
        <NewsList type="cardWithImage" loadmore={true} start={3} amount={3} />
      </div>
    );
  }
}

export default NewsSection;
