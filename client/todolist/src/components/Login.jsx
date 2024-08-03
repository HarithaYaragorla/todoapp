import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../client";

import "../App.css";

const Login = ({setToken}) => {
  let navigate = useNavigate()
  console.log("login")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error;

      console.log(data);
      setToken(data)
      navigate('/todo')

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="email" onChange={handleChange} /><br />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
