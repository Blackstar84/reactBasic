import logo from './logo.svg';
import './App.css';

function App() {

  const buy = ()=>{
    alert("You selected this product")
  }
  return (
    <div className="App">
      <h1 className='title'>This is a Product</h1>
      <button className='greenButton' onClick={buy}>Buy</button>
    </div>
  );
}

export default App;
