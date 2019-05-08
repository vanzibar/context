import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/languageContext";
import colorContext from "../context/colorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <colorContext.Provider value="red">
            <UserCreate />
          </colorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
