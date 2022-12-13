import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "../forms/LoginForm";

export default function Login() {
  return (
    <>
      <div className='formContainer'>
        <Heading title='Login' />
        <LoginForm />
      </div>
    </>
  );
}
