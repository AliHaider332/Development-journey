import React, { useState, useContext } from 'react';
import totalAmountContext from './totalAmountContext';

const products = [
  { name: 'Milk', price: 500, quantity: 'Lr' },
  { name: 'Bread', price: 150, quantity: 'Loaf' },
  { name: 'Eggs', price: 200, quantity: 'Dozen' },
  { name: 'Butter', price: 300, quantity: 'Pack' },
  { name: 'Cheese', price: 400, quantity: 'Block' },
  { name: 'Juice', price: 250, quantity: 'Bottle' },
  { name: 'Rice', price: 1000, quantity: 'Kg' },
  { name: 'Flour', price: 600, quantity: 'Kg' },
  { name: 'Sugar', price: 350, quantity: 'Kg' },
  { name: 'Salt', price: 100, quantity: 'Pack' },
];

const Body = () => {
  const [cart, setCart] = useState(new Map());

  // Use context inside the component
  const { amount, setAmount } = useContext(totalAmountContext);

  const increment = (product) => {
    const newCart = new Map(cart);
    newCart.set(product.name, (newCart.get(product.name) || 0) + 1);
    setCart(newCart);

    // Update total amount
    setAmount(amount + product.price);
  };

  const decrement = (product) => {
    const newCart = new Map(cart);
    const currentQty = newCart.get(product.name) || 0;

    if (currentQty > 1) {
      newCart.set(product.name, currentQty - 1);
      setAmount(amount - product.price);
    } else if (currentQty === 1) {
      newCart.delete(product.name);
      setAmount(amount - product.price);
    }

    setCart(newCart);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product, index) => {
          const qtyInCart = cart.get(product.name) || 0;

          return (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px',
                width: '150px',
                textAlign: 'center',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: Rs {product.price}</p>
              <p>Quantity: {product.quantity}</p>

              {qtyInCart > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button onClick={() => decrement(product)}>-</button>
                  <span>{qtyInCart}</span>
                  <button onClick={() => increment(product)}>+</button>
                </div>
              ) : (
                <button onClick={() => increment(product)}>ADD</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
