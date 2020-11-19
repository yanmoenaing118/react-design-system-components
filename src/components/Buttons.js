import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "./../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px 24px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 48px;
  `,
};

const Button = styled.button`
  cursor: pointer;
  font-weight: normal;
  border-radius: 2px;
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.header4};
  border: 1px solid transparent;
  padding: 10px 30px;
  transition: background-color 0.2s linear, color 0.2s linear,
    border-color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    border: 1px solid transparent;
  }

  &:active {
    backgrouond-color: ${defaultTheme.primaryColorActive};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColor};
    outline-offset: 2px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorInverted};

  &:disabled {
    background-color: ${defaultTheme.primaryColorDisabled};
    color: ${defaultTheme.textColorDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 1px solid ${defaultTheme.primaryColor};
  &:disabled {
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.textColorDisabled};
    border-color: ${defaultTheme.textColorDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};

  &:hover {
    background: none;
    border: 1px solid ${defaultTheme.primaryColorHover};
  }

  &:disabled {
    cursor: not-allowed;
    // background-color: ${defaultTheme.primaryColorDisabled};
    color: ${defaultTheme.textColorDisabled};
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
