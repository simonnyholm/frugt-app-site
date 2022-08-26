import { useContext } from "react";
import { Navigate } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";

const LoginForm = () => {
  const { setToken } = useContext(TokenContext);
  const navigate = Navigate;

  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        navigate("/");
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          <input type="text" name="username" id="" />
        </label>
      </div>
      <div>
        <label>
          <input type="password" name="password" id="" />
        </label>
      </div>

      <button type="submit">Log ind</button>
    </form>
  );
};

export default LoginForm;
