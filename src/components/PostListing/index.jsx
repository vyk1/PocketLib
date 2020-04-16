import React from "react";
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
  render() {
    const { postEdges } = this.props
    
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle" >
        <div className="md-grid md-cell--8 mobile-fix">
          {postEdges.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
