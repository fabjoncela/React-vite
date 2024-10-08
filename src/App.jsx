
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";

function App() {


  return (
    <>
      <Student name="Spone BOB" age={30} isStudent={true} />
      <Student name="Patrick" age="45" isStudent={false} />
      <Student age={12}/>
      <Button />
    </>
  );
}

export default App
