import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido! Disfruta tu compra" />
        <h1>E-Commerce</h1>
      </div>
    );
  }
}
export default App;
