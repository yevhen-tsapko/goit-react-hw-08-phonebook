import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input type="text" name="name"></input>
      </label>
      <label>
        Email
        <input type="email" name="email"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button>Log in</button>
    </form>
  );
};
