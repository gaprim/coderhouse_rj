import { Component } from "react";
import './ItemListContainer.css';
import productos from "../data/data.js";
import Item from "../Item/Item.js"


class ItemListContainer extends Component {
    constructor() {
      super();
      this.state = {
        state_productos: [],
      };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ state_productos: productos });
      }, 2000);
    }
  
    render() {
      return (
        <div className="cards-group">
          
            {this.state.state_productos.map((a) => {
              return <Item name={a.name} imagen={a.image} price= {a.price} description={a.description}/>;
            })}
          
        </div>
      );
    }
  }
  
  export default ItemListContainer;
  




