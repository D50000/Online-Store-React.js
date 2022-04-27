import useForm from '../lib/useForm';

export default function CreateProduct() {
  // Construct then hook the response to the function.
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'test name',
    price: '1234',
    description: 'test test ',
  });

  return (
    <form>
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

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
