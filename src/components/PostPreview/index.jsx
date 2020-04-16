import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import Media, { MediaOverlay } from "react-md/lib/Media";
import { FontIcon } from "react-md";

import PostTags from "../PostTags";
import PostCover from "../PostCover";
import logo from "../../assets/logo_t.png";
import "./PostPreview.scss";
import moment from "moment";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    if (typeof window == `undefined`) {
      return;
    }
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    if (typeof window == `undefined`) {
      return;
    }
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (typeof window == `undefined`) {
      return;
    }

    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <a style={{ textDecoration: "none" }} href={postInfo.path} target="_blank" rel="noopener noreferrer">
          <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <MediaOverlay>
              <CardTitle title={postInfo.title}>
                <Button raised secondary className="md-cell--right">
                  <FontIcon style={{ color: '#fff' }}>info</FontIcon>
                </Button>
              </CardTitle>
            </MediaOverlay>
          </Media>
        </a>
        <CardTitle
          expander={expand}
          avatar={<Avatar src={logo} role="presentation" />}
          title={`Publicado em ${postInfo.date ? moment(postInfo.date).format('DD/MM/YYYY') : "?"}`}
          subtitle={`${Object.is(postInfo.timeToRead, NaN) ? "?" : postInfo.timeToRead} min para ler`}
        />
        <CardText expandable={expand}>
          {postInfo.excerpt}
          <PostTags tags={postInfo.tags} />
        </CardText>
      </Card>
    );
  }
}

export default PostPreview;
