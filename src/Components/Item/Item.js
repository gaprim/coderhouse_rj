import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

export class Item extends Component {
  render() {
    return (
      <div className="cards">
          <div className="item-card">
          <Card>
          <Image src={this.props.imagen} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
              <span className="date">$ {this.props.price}</span>
            </Card.Meta>
            <Card.Description>{this.props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ItemCount />
          </Card.Content>
        </Card>
          </div>
        
      </div>
    );
  }
}

export default Item;
