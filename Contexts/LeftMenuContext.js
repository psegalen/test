import React, { createContext, useState } from "react";

export const LeftMenuContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
  });
  
  export const LeftMenuProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <LeftMenuContext.Provider
        value={{ isOpen, setIsOpen }}
      >
        {props.children}
      </LeftMenuContext.Provider>
    );
  };
