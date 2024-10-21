import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get('/items', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchItems();
  }, [token]);

  const createItem = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/items', { name, description }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems([...items, data]);
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
