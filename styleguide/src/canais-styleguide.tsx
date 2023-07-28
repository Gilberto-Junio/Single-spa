import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export function publicApiFunction() {}


// Exportando o Botao da lib Shadcn que usa o tailwind pra toda a parte de style ----- Uso ele no mfe @canais/navbar
export { Button } from "./components/ui/button";