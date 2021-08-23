import React from "react";

function Product({ basket, setBasket, product }) {
  const { id, title, price } = product;

  const basketItem = basket.find((item) => item.id === id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === id);
    // if product added before
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((item) => item.id !== id), checkBasket]);
    } else {
      setBasket([
        ...basket,
        {
          id: id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === id);
    const basketWithoutCurrent = basket.filter(item => item.id !== id);
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="product">
      <h5>{title}</h5>
      <p>${price}</p>
      <div className="actions">
        <button disabled={!basketItem} onClick={removeBasket}>Remove</button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button onClick={addBasket}>Add to Basket</button>
      </div>
      <style jsx>{`
        .product {
          padding: 10px;
          background: #eee;
          border: 1px solid #ddd;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}

export default Product;
