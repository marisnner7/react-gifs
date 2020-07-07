import React, { Component } from "react";

import SearchBar from './search_bar';


class App extends Component{
  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="select-gif">

          </div>
        </div>
      </div>

    );
  }
}


export default App;
