import React from "react";
import languageContext from "../context/languageContext";
import colorContext from "../context/colorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <colorContext.Consumer>
        {colourValue => (
          <button className={`ui button ${colourValue}`}>
            <languageContext.Consumer>
              {value => this.renderSubmit(value)}
            </languageContext.Consumer>
          </button>
        )}
      </colorContext.Consumer>
    );
  }
}

export default Button;
