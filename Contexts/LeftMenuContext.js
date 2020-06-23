import React, { createContext, useState } from "react";

export const LeftMenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  navigation: null,
  setNavigation: () => {},
});

export const LeftMenuProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navigation, setNavigation] = useState(null);

  return (
    <LeftMenuContext.Provider
      value={{ isOpen, setIsOpen, navigation, setNavigation }}
    >
      {props.children}
    </LeftMenuContext.Provider>
  );
};
