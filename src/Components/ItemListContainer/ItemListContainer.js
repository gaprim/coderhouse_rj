import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
    return (
        <div className="container">
            <h3>{greeting}</h3>
        </div>
    )
}
export default ItemListContainer;