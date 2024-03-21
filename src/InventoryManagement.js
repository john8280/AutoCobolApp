// InventoryManagement.js
// CRUD Features: Create, Read, Update, Delete
// Retro Aesthetic: To be added later

// Import necessary React hooks
import React, { useState } from 'react';

const InventoryManagement = () => {
  // Initialize state for inventory items
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product 1', quantity: 10 },
    { id: 2, name: 'Product 2', quantity: 20 },
    { id: 3, name: 'Product 3', quantity: 15 },
  ]);

  // State for new inventory item
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });

  // Function to handle adding a new item
  const handleAddItem = () => {
    const newItemWithId = { ...newItem, id: inventory.length + 1 };
    setInventory([...inventory, newItemWithId]);
    setNewItem({ name: '', quantity: '' });
  };

  // Function to handle deleting an item
  const handleDeleteItem = (id) => {
    const updatedInventory = inventory.filter((item) => item.id !== id);
    setInventory(updatedInventory);
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      {/* Form to add new item */}
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: parseInt(e.target.value) || '' })
          }
        />
        <button type="submit">Add Item</button>
      </form>
      {/* Table to display inventory */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
