import logo from './logo.svg';
import './App.css';

function App() {

  const greenButton ={
    backgroundColor: "green",
    color: "white",
    padding: "5px 15px",
  }
  const buy = ()=>{
    alert("You selected this product")
  }
  return (
    <div className="App">
      <h1 style={{color:'red',backgroundColor:'yellow'}}>This is a Product</h1>
      <button style={greenButton} onClick={buy}>Buy</button>
    </div>
  );
}

export default App;
