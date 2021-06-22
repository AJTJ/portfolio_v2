import React from "react";
import styled from "@emotion/styled";
import { useForm, ValidationError } from "@formspree/react";

import { MarginedContainer, SectionTitle, Button } from "../layout";

const ContactWrapper = styled.div`
  padding: 75px 0 150px;
`;

const FormContainer = styled(MarginedContainer)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 10;
  input,
  textarea {
    margin: 10px 0;
    padding: 5px;
  }
  button {
    align-self: flex-start;
    margin-top: 20px;
  }
`;

const Received = styled.div`
  padding: 20px 0;
  grid-column-start: 2;
  grid-column-end: 10;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzbypdvr");
  if (state.succeeded) {
    return <Received>Got your message!</Received>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
};

const Contact = () => {
  return (
    <ContactWrapper>
      <MarginedContainer>
        <SectionTitle>Contact Me</SectionTitle>
      </MarginedContainer>
      <FormContainer>
        <ContactForm />
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;
