

import List from "./List.jsx";

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 6, name: "veg1", calories: 95 },
    { id: 7, name: "qep", calories: 45 },
    { id: 8, name: "patellxhan", calories: 105 },
    { id: 9, name: "domate", calories: 159 },
    { id: 10, name: "sallat", calories: 37 },
  ];

  return (
    <>
      {/* conditional rendering */}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}

      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}



    </>
  );
}

export default App
