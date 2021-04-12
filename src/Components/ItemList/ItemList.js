import { Component } from "react";
import "./ItemList.css";

const productos = [
  { id: 1, title: "Producto A", price: 9.1, pictureUrl:'' },
  { id: 2, title: "Producto B", price: 4.6, pictureUrl:'' },
  { id: 3, title: "Producto C", price: 3.5, pictureUrl:'' },
  { id: 4, title: "Producto D", price: 3.4, pictureUrl:'' },
];

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      state_productos: [],
    };
  }

componentDidMount(){
    setTimeout(() => {
        this.setState({state_productos: productos})
    },2000);
}

  render() {
    return <div>
        <ul className ='listaProd'>
            {this.state.state_productos.map((a) => {
                return <li>{a.title} - {a.price}</li>
            })}
        </ul>
    </div>;
  }
}

export default ItemList;
