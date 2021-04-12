import React, { Component } from "react";
import "./ItemCount.css";
import { Button } from "semantic-ui-react";

export default class ItemCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      maxcount: 5,
    };
  }

  handleIncrement = () => {
    if (this.state.count < this.state.maxcount) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };
  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    return (
      <div className='ItemCount'>
               <div className='ItemCountItem'>
          <Button compact size="mini" negative onClick={this.handleDecrement}>
            -
          </Button>
        </div>
        <div className='ItemCountItem'>
            <p>{this.state.count}</p>
        </div>
        <div className='ItemCountItem'>
          <Button compact size="mini" positive onClick={this.handleIncrement}>
            +
          </Button>
        </div>
        
      <div>
          <Button compact basic>
            Agregar al carrito
          </Button>
        </div>
      </div>
    );
  }
}
