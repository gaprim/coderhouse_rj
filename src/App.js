import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>E-Commerce</h1>
        <ItemListContainer greeting="¡Bienvenido! Disfruta tu compra" />
        <ItemCount />
      </div>
    );
  }
}
export default App;
