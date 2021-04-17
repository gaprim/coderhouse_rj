import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>E-Commerce</h1>
        <ItemListContainer />
      </div>
    );
  }
}
export default App;
