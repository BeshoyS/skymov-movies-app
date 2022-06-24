import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function Register() {
    const navigate = useNavigate();
  // Error messages
  const [error, setError] = useState("");

  //Error list
  const [errorList, setErrorList] = useState([]);

  //Loading Icon
  const [loading, setLoading] = useState(false);

  //Adding A User
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
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
      first_name: Joi.string().alphanum().min(3).max(10).required().messages({
        "string.empty": `Your first name cannot be empty`,
        "string.min": `Your first name should have a minimum length of 3`,
        "string.max": `Your first name should have a maximum of 10`,
        "any.required": `Your first name is a required`,
      }),
      last_name: Joi.string().alphanum().min(3).max(10).required().messages({
        "string.empty": `Your last name cannot be empty`,
        "string.min": `Your last name should have a minimum length of 3`,
        "string.max": `Your last name should have a maximum of 10`,
        "any.required": `Your last name is a required`,
      }),
      age: Joi.number().min(18).max(80).required().messages({
        "number.base": `Your age should be written in numbers`,
        "number.empty": `Your age cannot be empty`,
        "number.min": `Your age should be older than 18`,
        "number.max": `Your age should be younger than 80`,
        "any.required": `Your age is a required`,
      }),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
        .required()
        .messages({
          "string.email": `Your email is not valid`,
          "string.empty": `Your email cannot be empty`,
          "any.required": `Your email is a required`,
        }),
      password: Joi.string()
        .pattern(new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$`))
        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
        .messages({
          "string.pattern.base": `Your password is not valid, should have both upper and lower case letter and a number and more than 8 letters`,
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
        `https://route-egypt-api.herokuapp.com/signup`,
        user
      );
      if (data.message === "success") {
        setLoading(false);
        navigate(`/login`);
        // Go to Login Page
      } else {
        setLoading(false);
        let errorMsg = data.message.slice(
          data.message.lastIndexOf(":") + 2,
          data.message.length
        );
        setError(errorMsg);
        console.log(data);
      }
    }
  }

  return (
    <div className="w-75 m-auto p-5">
      <h1>Register</h1>
      <form onSubmit={submit} className="my-5">
        {error && <div className="py-2 px-4  alert alert-danger">{error}</div>}
        {errorList.map((error, index) => (
          <div className="py-2 px-4  alert alert-danger" key={index}>
            {error.message}
          </div>
        ))}
        <input
          onChange={getUser}
          type="text"
          className="my-4 form-control"
          placeholder="First Name"
          name="first_name"
        />

        <input
          onChange={getUser}
          type="text"
          className="my-4 form-control"
          placeholder="Last Name"
          name="last_name"
        />

        <input
          onChange={getUser}
          type="text"
          className="my-4 form-control"
          placeholder="Age"
          name="age"
        />

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
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}
