
import Card from "./Card.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username="Fabi" />
      <UserGreeting isLoggedIn={true}  />
      <UserGreeting isLoggedIn={false} username="Fabi" />
      {/* <Card /> */}

    </>
  );
}

export default App
