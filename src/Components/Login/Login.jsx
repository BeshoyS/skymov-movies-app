import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({getLoginUser}) {
  const navigate = useNavigate();
  // Error messages
  const [error, setError] = useState("");

  //Error list
  const [errorList, setErrorList] = useState([]);

  //Loading Icon
  const [loading, setLoading] = useState(false);

  //Adding A User
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // console.log(myUser);
  }
  function validation() {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
        .required(),
      password: Joi.string()
        .pattern(
          new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$`)
        )
        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
        .messages({
          "string.pattern.base": `Your password is not valid`,
          "string.empty": `Your password cannot be empty`,
          "any.required": `Your password is a required`,
        }),
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    let validationRes = validation();
    if (validationRes.error) {
      setLoading(false);
      setErrorList(validationRes.error.details);
    } else {
      let { data } = await axios.post(
        `https://route-egypt-api.herokuapp.com/signin`,
        user
      );
      if (data.message === "success") {
        setLoading(false);
        localStorage.setItem('userToken', data.token);
        getLoginUser();
        navigate(`/home`);
        // Go to Login Page
      } else {
        setLoading(false);
        let errorMsg = data.message.slice(
          data.message.lastIndexOf(":") + 1,
          data.message.length
        );
        setError(errorMsg);
        console.log(data);
      }
    }
  }

  return (
    <div className="w-75 m-auto p-5 vh-100">
      <h1>Login</h1>
      <form onSubmit={submit} className="my-5">
        {error && <div className="py-2 px-4  alert alert-danger">{error}</div>}
        {errorList.map((error, index) => ( index === 0 ? <div className="py-2 px-4 alert alert-danger" key ={index}> Email or password is invalid</div>:
          <div className="py-2 px-4 alert alert-danger" key={index}>{error.message}</div>
        ))}

        <input
          onChange={getUser}
          type="email"
          className="my-4 form-control"
          placeholder="Email Address"
          name="email"
        />

        <input
          onChange={getUser}
          type="password"
          className="my-4 form-control"
          placeholder="Password"
          name="password"
        />

        <button type="submit" className="btn btn-info mt-3">
          {loading ? (
            <i className="fas fa-spinner fa-spin" aria-hidden="true" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
