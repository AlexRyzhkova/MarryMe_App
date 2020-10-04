import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import SignUpButton from "../signUpButton/SignUpButton";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Dein Name</label>
        <input name="DeinName" placeholder="Name" ref={register()} />
        {/* {errors.DeinName && <p>Das ist ein Pflichtfeld</p>} */}
        <label>Name des Partners</label>
        <input
          name="PartnerName"
          placeholder="Name"
          ref={register({ required: true })}
        />
        {/* {errors.PartnerName && <p>Das ist ein Pflichtfeld</p>} */}
        <label>Datum und Zeit</label>
        <input name="DateTime" placeholder="Datum" ref={register()} />
        {/* {errors.DateTime && <p>Das ist ein Pflichtfeld</p>} */}
        <SignUpButton />
      </form>
    </Form>
  );
};
export default SignUpForm;

//styling

const Form = styled.div`
  padding: 0 10px;
  form {
    display: grid;
    grid-template-columns: auto 60%;
    grid-template-rows: 1fr 1fr 1fr auto;
    align-content: space-between;
    align-items: space-between;
    grid-row-gap: 1.8em;
    grid-column-gap: 3em;
  }
  button {
    margin-top: 0.5em;
    grid-column: 1/3;
    justify-self: center;
  }
  label {
    align-self: center;
  }
  input {
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 1px solid #383636;
    background-color: transparent;
  }
`;
