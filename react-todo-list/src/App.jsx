import { useState } from 'react';
import './styles.css';

function App() {
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleChange}
        className="new-item-form"
      >
        <div className="form-row">
          <label htmlFor="">New Item</label>
          <input
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
