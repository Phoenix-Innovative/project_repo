import React, { Component } from "react";
import axios from "axios";
import { DataUrl } from "../../../../config";
import Header from "./header";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios
      .get(`${DataUrl}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];
        axios.get(`${DataUrl}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
        });
      });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className="article-wrapper">
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className="article-body">
          <h1 className="article-title">{article.title}</h1>
          <div
            className="article-image"
            style={{
              background: `url('/images/articles/${article.image}')`
            }}
          />
          <div className="article-text">{article.body}</div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
