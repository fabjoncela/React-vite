
import Card from "./Card.jsx";
import List from "./List.jsx";

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits"/>


    </>
  );
}

export default App
