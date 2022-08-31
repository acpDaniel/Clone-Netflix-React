import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className={this.props.black ? "black" : ""}>
        <div className="header--logo">
          <a href="/">
            <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"></img>
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
