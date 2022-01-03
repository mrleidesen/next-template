import type { VFC } from "react";

import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
    -webkit-tap-highlight-color: transparent;
  }
`;

const GlobalStyles: VFC = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
};

export default GlobalStyles;
