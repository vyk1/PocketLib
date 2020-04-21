import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chip from "react-md/lib/Chips";
import "./PostTags.scss";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags?q=${tag}`}
            >
              <Chip label={tag} className="post-preview-tags" />
            </Link>
            // <a
            //   key={tag}
            //   style={{ textDecoration: "none" }}
            //   href={`/tags?q=${tag}`}
              
            // >
            //   <Chip label={tag} className="post-preview-tags" />
            // </a>
          ))}
      </div>
    );
  }
}

export default PostTags;
