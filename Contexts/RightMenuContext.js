import React, { createContext, useState } from "react";

export const RightMenuContext = createContext({
    isRightOpen: false,
    setIsRightOpen: () => {},
  });
  
  export const RightMenuProvider = (props) => {
    const [isRightOpen, setIsRightOpen] = useState(false);
  
    return (
      <RightMenuContext.Provider
        value={{ isRightOpen, setIsRightOpen }}
      >
        {props.children}
      </RightMenuContext.Provider>
    );
  };
