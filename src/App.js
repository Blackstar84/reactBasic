import logo from './logo.svg';
import './App.css';

function App() {

  

  const buy = ()=>{
    alert("You selected this product")
  }
  return (
    <div className="App">
      <h3>This is a Product</h3>
      <button onClick={buy}>Buy</button>
    </div>
  );
}

export default App;
