"use client";

import StyledComponentsRegistry from "../../../libs/registry";
import { GlobalStyles } from "./GlobalStyles";
import { Footer, Header } from "../LandingPage";
// import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {/* Removeing Preloader for now because its a little laggy. */}
      {/* <Preloader setComplete={setComplete} /> */}
      {/* <div className={complete ? "complete" : "not_complete"}> */}
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </StyledComponentsRegistry>
  );
};

export default Layout;
