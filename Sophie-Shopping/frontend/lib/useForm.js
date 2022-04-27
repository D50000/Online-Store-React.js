import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    setInputs({
      ...inputs,
      // Dynamic update the key and value
      [e.target.name]: e.target.value,
    });
  }

  // Return the initialState and SetStateAction()
  return {
    inputs,
    handleChange,
  };
}
