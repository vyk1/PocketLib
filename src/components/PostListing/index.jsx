import React from "react";
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
  render() {
    const { postEdges } = this.props

    return (
      <span>
        {postEdges.map(post => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </span>
    );
  }
}

export default PostListing;
