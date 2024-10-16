
function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: <b>{item.calories}</b></li>);

    return (<><div className="main">
        <div className="cl1"><h3 className="list-category">{category}</h3></div>
        <div className="cl2"><ol className="list-items">{listItems}</ol></div>


    </div>
    </>);
}
export default List