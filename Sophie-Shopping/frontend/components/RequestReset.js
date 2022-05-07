import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import Form from './styles/Form';
import useFomr from '../lib/useForm';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    SendUserPasswordResetLinkResult(data: { email: $email }) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useFomr({
    email: '',
  });

  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await requestReset().catch(console.error);
    console.log(res);
    console.log({ inputs, data, loading, error });
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request to Reset Your Account</h2>
      <Error error={error} />
      <fieldset>
        {data?.SendUserPasswordResetLinkResult === null && (
          <p>Success!! Check your email for the reset link.</p>
        )}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Input your e-mail address ..."
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Reset the Password !!</button>
      </fieldset>
    </Form>
  );
}
