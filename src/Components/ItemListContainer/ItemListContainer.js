import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';


function ItemListContainer({ greeting }) {
    return (
        <div className="container">
            <h3>{greeting}</h3>
            <ItemList />
        </div>
    )
}
export default ItemListContainer;