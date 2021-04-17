import { Component } from "react";
import Item from "../Item/Item.js"
import productos from "../data/data.js";

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      state_productos: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ state_productos: productos });
    }, 5000);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.state_productos.map((a) => {
            return <Item name={a.name} imagen={a.image} price= {a.price} description={a.description}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default ItemList;
