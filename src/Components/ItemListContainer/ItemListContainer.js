import './styles.css';

function ItemListContainer(props) {
    return (
        <div className="container">
            <h3>{props.greeting}</h3>
        </div>
    )
}
export default ItemListContainer;