import React, { Component } from "react";
import VideosListTemplate from "./videosListTemplate";

import Button from "../Buttons/buttons";
import axios from "axios";
import { DataUrl } from "../../../config";

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${DataUrl}/teams`).then(response =>
        this.setState({
          teams: response.data
        })
      );
    }

    axios.get(`${DataUrl}/videos?_start=${start}&_end=${end}`).then(response =>
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      })
    );
  };

  renderTitle = title => {
    return title ? <h3>Videos List</h3> : null;
  };

  renderVideos = type => {
    let template = null;
    switch (type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;

      default:
        break;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
    console.log(this.state.start, this.state.end);
  };

  renderButton = loadmore => {
    return loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        btnText="Load More Videos"
      />
    ) : (
      <Button type="linkTo" btnText="More Videos" linkTo="/videos" />
    );
  };

  render() {
    return (
      <div className="videos-list-wrapper">
        {this.renderTitle(this.props.title)}
        {this.renderVideos(this.props.type)}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}

export default VideosList;
