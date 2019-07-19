import React from "react";
import VideosList from "../Widgets/VideosList/videosList";

const Videos = () => {
  return (
    <div>
      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={6}
      />
    </div>
  );
};

export default Videos;
