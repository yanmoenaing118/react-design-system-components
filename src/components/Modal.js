import React from "react";
import styled from "styled-components";
import { illustrations } from "./../assets";
import { H2, H4 } from "./Headings";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  grid-column: 1 / -1;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 95%;
  height: auto;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px 26px;

  img {
    width: 50vw;
  }
`;

export const Modal = (props) => {
  return (
    <ModalWrapper>
      <img src={illustrations.SignUp} alt="Sign up" arial-hidden="true" />
      <H2>We are here to help you!</H2>
      <H4>
        This is a design system created to use across in my projects. For now,
        this includes only the components ( ...later to add more components )
        necessary in my project.
      </H4>
      <PrimaryButton>Sign up</PrimaryButton>
    </ModalWrapper>
  );
};
