import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App({name, price, onShowProduct, onCalculatedTotal}) {

  //Declare a new state variable called 'quantity'

  const [quantity, setQuantity] = useState(0);


  const buy = ()=>{
    //alert("You selected this product");
    setQuantity(quantity+1);
    onCalculatedTotal(price);
  }
  return (
    <div className="App">
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={buy}>Buy</button>
      <button onClick={()=> onShowProduct(name)}>Show</button>
      <h3>Quantity: {quantity}</h3>
      <hr/>
    </div>
  );
}

const Total = ({totalCash})=>{
  return(
    <h3>Total Cash: {totalCash}</h3>
  )
}

const ProductList = ()=>{

  const [total, setTotal] = useState(0);

  const calculateTotal = (price) =>{
    setTotal(total + price);
  }

  const showProduct=(name)=>{
    alert("You Selected " + name);
  }
  return (
    <div>
      <App name="Android" price={150} onShowProduct={showProduct} onCalculatedTotal={calculateTotal} />
      <App name="Apple" price={170} onShowProduct={showProduct} onCalculatedTotal={calculateTotal} />
      <App name="Nokia" price={65} onShowProduct={showProduct} onCalculatedTotal={calculateTotal} />
      <Total totalCash={total} />
    </div>
    
  )
}

export default ProductList;
