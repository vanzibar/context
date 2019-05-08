import React from "react";
import LanguageContext from "../context/languageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        <div>Select a language:</div>
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english", "red")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch", "primary")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
