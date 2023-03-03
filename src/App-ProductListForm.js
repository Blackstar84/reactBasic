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

const ProductForm = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);

  const createProduct=()=>{
    alert("Name: " + name + " - Price: " + price);
  }

  return(
    <form>
        <label>Product Name</label>
        <input type="text" 
        onChange={(e)=> setName(e.target.value)} /><br/><br/>

        <label>Product Price</label>
        <input type="number" onChange={(e)=> setPrice(e.target.value)} /><br/><br/>

        <button onClick={createProduct}>Create</button>
        <hr/>
    </form>
  )
}

const ProductList = ()=>{

  const [total, setTotal] = useState(0);

  const [products, setProducts] = useState([
    {id: 1, name: "Andorid", price: 150},
    {id: 2, name: "Apple", price: 170},
    {id: 3, name: "Nokia", price: 65},
  ]);

  const calculateTotal = (price) =>{
    setTotal(total + price);
  }

  const showProduct=(name)=>{
    alert("You Selected " + name);
  }
  return (
    <div>
      <ProductForm />
      {products.map((p)=>(
          <App key={p.id} name={p.name} price={p.price} onShowProduct={showProduct} onCalculatedTotal={calculateTotal} />
      ))}
      <Total totalCash={total} />
    </div>
    
  )
}

export default ProductList;
