
function List() {

    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 },
    ];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical order
    //fruits.sort((a, b) => a.calories - b.calories); //numeric order
    //fruits.sort((a, b) => b.calories - a.calories); //reverse numeric order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    //const highCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: {fruit.calories}</li>);

    return (<ol>{listItems}</ol>);
}
export default List