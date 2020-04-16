import React, { Component } from "react";
// import PostCover from "./PostCoverComponent";

class PostCover extends Component {
  render() {
    const { postNode, coverHeight, coverClassName } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${postNode.cover})`,
          height: `${coverHeight}px`
        }}
        className={coverClassName}
      />
    )
  }
}

export default PostCover;
