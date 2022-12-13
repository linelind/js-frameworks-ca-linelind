import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className='formContainer'>
      <Heading title='Contact' />
      <ContactForm />
    </div>
  );
}
