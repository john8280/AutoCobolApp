// OrderProcessing.js
import React, { useState } from 'react';

const OrderProcessing = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Product 1', quantity: 5 },
    { id: 2, product: 'Product 2', quantity: 10 },
    { id: 3, product: 'Product 3', quantity: 8 },
  ]);

  const [newOrder, setNewOrder] = useState({ id: '', product: '', quantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({ id: '', product: '', quantity: '' });
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h2>Order Processing</h2>
      <div>
        <h3>Add New Order</h3>
        <input type="text" name="id" placeholder="ID" value={newOrder.id} onChange={handleInputChange} />
        <input type="text" name="product" placeholder="Product" value={newOrder.product} onChange={handleInputChange} />
        <input type="text" name="quantity" placeholder="Quantity" value={newOrder.quantity} onChange={handleInputChange} />
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
      <div>
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td><button onClick={() => handleDeleteOrder(order.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderProcessing;
