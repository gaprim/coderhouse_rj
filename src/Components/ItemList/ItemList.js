import Item from "../Item/Item.js"
import './ItemList.css'

function ItemList() {
  return (
      <div className="container">
          <h3>{greeting}</h3>
          <div className="cards">
          <Item />
          </div>
          
      </div>
  )
}
export default ItemList;