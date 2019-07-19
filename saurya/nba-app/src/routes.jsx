import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./hoc/layout/layout";
import NewsArticles from "./components/Articles/News/Post/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import NewsSection from "./components/News/newsSection";
import Videos from "./components/VideosSection/videos";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/articles/:id" exact component={NewsArticles} />
          <Route path="/videos/:id" exact component={VideoArticle} />
          <Route path="/news" exact component={NewsSection} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
