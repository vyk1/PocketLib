import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="notice-container text-center">
          <div className="copyright">
            <h4><a href="https://github.com/vyk1" target="_blank" rel="noopener noreferrer">@vyk1</a></h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
