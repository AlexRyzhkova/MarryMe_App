import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import SignUpButton from "../signUpButton/SignUpButton";
import postAccount from "../../apiAccount/postAccount";
const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    await postAccount(data);
    console.log(data);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Braut</label>
          <input
            id="name"
            autoComplete="off"
            name="DeinName"
            placeholder="Name"
            ref={register({ required: true })}
          />
        </section>
        {errors.DeinName && <small>Bitte ausfüllen</small>}
        <section>
          <label htmlFor="Bräutigam">Bräutigam</label>
          <input
            id="Bräutigam"
            autoComplete="off"
            name="PartnerName"
            placeholder="Name"
            ref={register({ required: true })}
          />
        </section>
        {errors.PartnerName && <small>Bitte ausfüllen</small>}
        <section>
          <label htmlFor="Datum">Datum</label>
          <input
            id="Datum"
            type="date"
            name="DateTime"
            placeholder="Datum"
            ref={register({ required: true })}
          />
        </section>
        {errors.DateTime && <small>Bitte ausfüllen</small>}
        <SignUpButton />
      </form>
    </Form>
  );
};
export default SignUpForm;

//styling

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    label {
      margin-left: 2em;
    }

    input {
      margin-right: 3em;
      outline: none;
      border: none;
      border-bottom: 1px solid #383636;
      background-color: transparent;
    }
  }

  small {
    align-self: center;
    color: #de3a3a;
  }
  button {
    margin-top: 2em;
    align-self: center;
  }
`;
