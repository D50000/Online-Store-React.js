import Form from './styles/Form';

import useForm from '../lib/useForm';

export default function CreateProduct() {
  // Construct then hook the response to the function.
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'test name',
    price: '1234',
    description: 'test test ',
  });

  return (
    <Form
      onSubmit={(e) => {
        console.log(inputs);
        e.preventDefault();
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
