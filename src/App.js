import './App.css';
import { useState, useEffect } from 'react';
import products from './service/products.json';
//Components
import Header from './components/Header';
import Product from './components/Product';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState() 

  useEffect(() => {
    console.log(basket)
  }, [basket])

  return (
    <>
      <Header money={money} />
      {
        products.map(product => (
          <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
        ))
      }
    </>
  );
}

export default App;
