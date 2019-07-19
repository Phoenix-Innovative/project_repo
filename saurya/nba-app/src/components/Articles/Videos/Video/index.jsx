import React, { Component } from "react";
import axios from "axios";
import { DataUrl } from "../../../../config";
import Header from "../../News/Post/header";
import VideosListTemplate from "../../../Widgets/VideosList/videosListTemplate";
import "../../../../../public/styles.css";

class VideoArticle extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    axios
      .get(`${DataUrl}/videos?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];
        axios.get(`${DataUrl}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
          this.getRelated();
        });
      });
  }

  getRelated = () => {
    axios.get(`${DataUrl}/teams`).then(response => {
      let teams = response.data;
      console.log(this.state.team[0].city);

      axios
        .get(`${DataUrl}/videos?q=${this.state.team[0].city}&limit=3`)
        .then(response => {
          this.setState({
            teams,
            related: response.data
          });
        });
    });
  };

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header teamData={team[0]} />
        <div className="single-video-wrapper">
          <h1>{article.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${article.url}`}
            title="videoplayer"
            width="100%"
            height="300px"
          />
        </div>
        <div className="related-wrapper">
          <VideosListTemplate
            data={this.state.related}
            teams={this.state.teams}
          />
        </div>
      </div>
    );
  }
}

export default VideoArticle;
