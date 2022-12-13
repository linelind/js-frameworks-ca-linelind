import React from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../forms/ValidationError";
import { API, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Alert from "react-bootstrap/Alert";

const url = API + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    /* console.log(data); */

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history("/admin");
    } catch (error) {
      setLoginError("Invalid login details.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {loginError && <Alert variant='danger'>Wrong login details.</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <label>
            Username:
            <input {...register("username")} />
            {errors.username && <span>{errors.username.message}</span>}
          </label>

          <label>
            Password:
            <input {...register("password")} type='password' />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
          <button className='cta'>{submitting ? "Logging in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
