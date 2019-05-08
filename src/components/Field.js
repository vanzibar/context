import React from "react";
import languageContext from "../context/languageContext";

class Field extends React.Component {
  static contextType = languageContext;

  render() {
    const text = this.context.language === "english" ? "name" : "dutch";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
