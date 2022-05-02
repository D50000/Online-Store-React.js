import { useState, useEffect } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const initailValues = Object.values(initial).join('');

  // Similar to Angular ngOnchange.
  useEffect(() => {
    setInputs(initial);
  }, [initailValues]);

  function handleChange(e) {
    // Handle the data type that pass in.
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      // Dynamic update the key and value
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const emptyState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(emptyState);
  }

  // Return the initialState and SetStateAction()
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
