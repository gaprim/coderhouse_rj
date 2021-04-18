import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Components/Navbar/Navbar";
///Views
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail/ItemDetail"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <h1>E-Commerce</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/itemdetail/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
