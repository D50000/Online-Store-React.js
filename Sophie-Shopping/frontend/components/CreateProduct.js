import { useState } from 'react';

export default function CreateProduct() {
  const [name, price, setName] = useState('test test');
  return (
    <form>
      <label htmlFor="name">
        name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}
