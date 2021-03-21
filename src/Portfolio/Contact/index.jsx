import React from "react";
import styled from "@emotion/styled";

import { MarginedContainer, SectionTitle } from "../layout";

const ContactWrapper = styled.div``;

const Contact = () => {
  return (
    <ContactWrapper>
      <MarginedContainer>
        <SectionTitle>Contact Me</SectionTitle>
        <p>my_last_name.my_first_name@gmail.com</p>
      </MarginedContainer>
    </ContactWrapper>
  );
};

export default Contact;
