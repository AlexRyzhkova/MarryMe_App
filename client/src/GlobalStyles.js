import React from "react";
import { Global, css } from "@emotion/core";
import Roboto from "./fonts/roboto-regular.ttf";
import Lora from "./fonts/lora-mediumItalic.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
        }
        :root {
          --font-color-dark: #383636;
          --font-color-light: #f5f6fa;
          --base-bg-color: linear-gradient(
            180deg,
            rgba(248, 248, 248, 1) 45%,
            rgba(211, 211, 211, 1) 100%
          );
          --menu-bg-color: #cebebe;
          --header-bg-color: #a79292;
          --bubble-bg-color: #cebebe;
          --button-bg-color: #ad9494;
          --font-lora: "Lora";
          --font-roboto: "Roboto";
        }
        html {
          @font-face {
            font-family: "Roboto";
            src: url(${Roboto}) format("truetype");
          }

          @font-face {
            font-family: "Lora";
            src: url(${Lora}) format("truetype");
          }
          font-family: "Roboto", sans-serif;
          height: 100vh;
          width: 100vw;
          background-image: var(--base-bg-color);
        }

        button {
          font-family: --font-roboto;
          font-size: 1.1em;
          /* background-color: white; */
        }
        h1 {
          font-family: var(--font-lora);
          font-size: 2.2rem;
          color: var(--font-color-dark);
        }

        h2 {
          font-size: 1.3em;
          color: var(--font-color-dark);
        }
        p {
          color: var(--font-color-dark);
          font-size: 1.1em;
        }
        small {
          align-self: center;
          color: #de3a3a;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
