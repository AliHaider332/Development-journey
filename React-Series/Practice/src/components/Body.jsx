import React, { useState } from 'react';
import AmountSummary from '../Context/AmountSummary';
import { useContext } from 'react';
const Body = React.memo(() => {
  const { updateAmount, updateQuantity } = useContext(AmountSummary);
  const products = [
    { id: 1, name: 'Milk', price: 120, quantity: '1 Liter' },
    { id: 2, name: 'Bread', price: 80, quantity: '1 Pack' },
    { id: 3, name: 'Eggs', price: 200, quantity: '12 Pieces' },
    { id: 4, name: 'Rice', price: 300, quantity: '5 Kg' },
    { id: 5, name: 'Apples', price: 150, quantity: '1 Kg' },
    { id: 6, name: 'Cooking Oil', price: 450, quantity: '1 Liter' },
    { id: 7, name: 'Sugar', price: 100, quantity: '1 Kg' },
    { id: 8, name: 'Salt', price: 40, quantity: '1 Kg' },
    { id: 9, name: 'Tea', price: 250, quantity: '250 g' },
    { id: 10, name: 'Coffee', price: 350, quantity: '200 g' },
    { id: 11, name: 'Butter', price: 180, quantity: '250 g' },
    { id: 12, name: 'Cheese', price: 220, quantity: '200 g' },
    { id: 13, name: 'Yogurt', price: 90, quantity: '500 g' },
    { id: 14, name: 'Bananas', price: 60, quantity: '1 Kg' },
    { id: 15, name: 'Oranges', price: 120, quantity: '1 Kg' },
    { id: 16, name: 'Tomatoes', price: 80, quantity: '1 Kg' },
    { id: 17, name: 'Potatoes', price: 50, quantity: '1 Kg' },
    { id: 18, name: 'Onions', price: 70, quantity: '1 Kg' },
    { id: 19, name: 'Chicken', price: 450, quantity: '1 Kg' },
    { id: 20, name: 'Fish', price: 550, quantity: '1 Kg' },
    { id: 20, name: 'Beef', price: 900, quantity: '1 Kg' },
  ];

  // State to store cart items and their quantities
  const [cart, setCart] = useState({}); // { productName: quantity }

  // Add item to cart or increment
  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: prev[item.name] ? prev[item.name] + 1 : 1,
    }));
    updateAmount((prev) => prev + item.price);
    updateQuantity((prev) => prev + 1);
  };

  // Decrement item quantity
  const removeFromCart = (item) => {
    setCart((prev) => {
      if (!prev[item.name]) return prev; // nothing to remove
      const newCart = { ...prev };
      if (newCart[item.name] === 1) delete newCart[item.name];
      else newCart[item.name] -= 1;
      return newCart;
    });

    updateAmount((prev) => prev - item.price);
    updateQuantity((prev) => prev - 1);
  };

  return (
    <div style={{ padding: '25px' }}>
      <h2 style={{ marginBottom: '20px', color: '#1f2933' }}>🛍️ Products</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'translateY(-4px)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = 'translateY(0)')
            }
          >
            <h3 style={{ marginBottom: '5px', color: '#111827' }}>
              {item.name}
            </h3>

            <p style={{ color: '#6b7280', margin: '4px 0' }}>
              Quantity: {item.quantity}
            </p>

            <p style={{ fontWeight: 'bold', margin: '6px 0' }}>
              Rs. {item.price}
            </p>

            {/* If item is in cart, show increment/decrement buttons */}
            {cart[item.name] ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '8px',
                }}
              >
                <button
                  style={{
                    padding: '5px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <span style={{ fontWeight: '600' }}>{cart[item.name]}</span>
                <button
                  style={{
                    padding: '5px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#22c55e',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                style={{
                  marginTop: '8px',
                  backgroundColor: '#22c55e',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Body;
