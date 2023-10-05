import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [items, setItems] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("api-url");
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (itemId) => {
    try {
      const response = await axios.put(`api-url/${itemId}`, updatedItem);
      // Assuming the API returns the updated item, update the local data state
      const updatedItems = items.map((item) =>
        item.id === itemId ? response.data : item,
      );
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setUpdatedItem({
      ...updatedItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={updatedItem.name || ""}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
