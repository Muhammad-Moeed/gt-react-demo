import React from 'react';
import { Var, T } from "gt-react";


function CustomComponent({ children }) {
  return (<T id="components.customcomponent.0">
    <div>
      <h2>This is a custom component:</h2>
      <div><Var>{children}</Var></div>
    </div></T>
  );
}

export default CustomComponent;