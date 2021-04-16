import { Component } from "react";
import "./ItemList.css";
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
            return <li>{a.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// <div>
//   {data.productos.map((productos) =>
//     <div>
//       <h2>{productos.name}</h2>
//     </div>
//   )}
// </div>

export default ItemList;
