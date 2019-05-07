import React from "react";
import UserCreate from "./UserCreate";
import languageContext from "../context/languageContext";
import colorContext from "../context/colorContext";

class App extends React.Component {
  state = { language: "english", colour: "red" };

  onLanguageChange = (language, colour) => {
    this.setState({ language, colour });
  };

  render() {
    return (
      <div className="ui container">
        <div>Select a language:</div>
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
        <colorContext.Provider value={this.state.colour}>
          <languageContext.Provider value={this.state.language}>
            <UserCreate />
          </languageContext.Provider>
        </colorContext.Provider>
      </div>
    );
  }
}

export default App;
