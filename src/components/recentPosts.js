import React, { Component } from "react";

import { connect } from "react-redux";

import * as action from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts=heading">
            <div className="recent-posts__posts">
              <ul>
                <li>recent post 0</li>
                <li>recent post 1</li>
                <li>recent post 2</li>
                <li>recent post 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
