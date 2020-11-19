import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { H1, H2, H3, H4, H5, P, Modal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

const Index = (props) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <main>
        <nav>
          <SecondaryButton
            modifiers="small"
            onClick={() => setUseDarkTheme(false)}
          >
            DefaultTheme
          </SecondaryButton>
          <PrimaryButton
            modifiers="small"
            onClick={() => setUseDarkTheme(true)}
          >
            Dark Theme
          </PrimaryButton>
        </nav>
        <Modal />
        <H1>H1 Design System</H1>
        <H2>H2 Design System</H2>
        <H3>H3 Design System</H3>
        <H4>H4 Design System</H4>
        <H5>H5 Design System</H5>
        <P>I am a paragraph</P>

        <div>
          <P>Primary</P>
          <PrimaryButton>Submit</PrimaryButton>
        </div>

        <div>
          <P>Primary disabled</P>
          <PrimaryButton disabled>Submit</PrimaryButton>
        </div>

        <div>
          <P>Primary large</P>
          <PrimaryButton modifiers="large">Submit</PrimaryButton>
        </div>

        <div>
          <P>Primary small </P>
          <PrimaryButton modifiers="small">Submit</PrimaryButton>
        </div>
        <div>
          <P>Secondary</P>
          <SecondaryButton>Submit</SecondaryButton>
        </div>
        <div>
          <P>Secondary disabled</P>
          <SecondaryButton disabled>Submit</SecondaryButton>
        </div>
        <div>
          <P>Secondary large</P>
          <SecondaryButton modifiers="large">Submit</SecondaryButton>
        </div>

        <div>
          <P>Secondary small</P>
          <SecondaryButton modifiers="small">Submit</SecondaryButton>
        </div>

        <div>
          <P>Tertiary</P>
          <TertiaryButton>Submit</TertiaryButton>
        </div>
        <div>
          <P>Tertiary</P>
          <TertiaryButton disabled>Submit</TertiaryButton>
        </div>
        <div>
          <P>Tertiary large</P>
          <TertiaryButton modifiers="large">Submit</TertiaryButton>
        </div>

        <div>
          <P>Tertiary small</P>
          <TertiaryButton modifiers="small">Submit</TertiaryButton>
        </div>

        <GlobalStyle />
      </main>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
