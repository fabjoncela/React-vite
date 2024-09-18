
import './App.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {


  return (
    <>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

      <h1>{user.name}</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  )
}

export default App
