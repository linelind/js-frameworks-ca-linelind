import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "react-bootstrap/Alert";

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name").min(3, "You must enter at least 3 characters"),
  lastname: yup.string().required("Please enter your last name").min(4, "You must enter at least 4 characters"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  subject: yup.string().required("Please select a subject"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setSubmitted(true);
    reset();
  }

  return (
    <div className='formContainer'>
      {submitted && <Alert variant='success'>Thank you for your message!</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name:
          <input {...register("firstname")} />
          {errors.firstname && <span>{errors.firstname.message}</span>}
        </label>
        <label>
          Last name:
          <input {...register("lastname")} />
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </label>
        <label>
          Email:
          <input {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          Subject:
          <select {...register("subject")}>
            <option value=''></option>
            <option value='Subject 1'>Subject 1</option>
            <option value='Subject 2'>Subject 2</option>
            <option value='Subject 3'>Subject 3</option>
          </select>
          {errors.subject && <span>{errors.subject.message}</span>}
        </label>
        <label>
          Message:
          <textarea {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </label>
        <button className='cta'>Send</button>
      </form>
    </div>
  );
}
