import React from "react";
// import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import SignUpButton from "../signUpButton/SignUpButton";

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Dein Name</label>
        <input
          name="DeinName"
          placeholder="Name"
          ref={register({ required: true })}
        />
        {errors.DeinName && <p>Das ist ein Pflichtfeld</p>}
        <label>Name des Partners</label>
        <input
          name="PartnerName"
          placeholder="Name"
          ref={register({ required: true })}
        />
        {errors.PartnerName && <p>Das ist ein Pflichtfeld</p>}
        <label>Datum und Zeit</label>
        <input
          name="DateTime"
          placeholder="Datum"
          ref={register({ required: true })}
        />
        {errors.DateTime && <p>Das ist ein Pflichtfeld</p>}
        <SignUpButton />
      </form>
    </div>
  );
};
export default SignUpForm;
