import React from "react";
import languageContext from "../context/languageContext";
import colorContext from "../context/colorContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <colorContext.Consumer>
        {colourValue => (
          <button className={`ui button ${colourValue}`}>
            <languageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </languageContext.Consumer>
          </button>
        )}
      </colorContext.Consumer>
    );
  }
}

export default Button;
