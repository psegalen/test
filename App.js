import React, { useContext } from "react";
import { Provider } from "react-redux";
import Navigation from "./Navigation/Navigation";
import SideMenu from "react-native-side-menu";
import Left from "./Components/HamburgerLeft";
import Right from "./Components/HamburgerRight";
import {
  LeftMenuProvider,
  LeftMenuContext,
} from "./Contexts/LeftMenuContext";
import {
  RightMenuContext,
  RightMenuProvider,
} from "./Contexts/RightMenuContext";
import store from "./Redux/store";

const AppRoot = () => {
  const { isOpen, setIsOpen } = useContext(LeftMenuContext);
  const { isRightOpen, setIsRightOpen } = useContext(
    RightMenuContext
  );
  return (
    <SideMenu
      menu={<Left />}
      menuPosition="left"
      isOpen={isOpen}
      disableGestures
      onChange={(menuIsOpen) => setIsOpen(menuIsOpen)}
    >
      <SideMenu
        menu={<Right />}
        menuPosition="right"
        isOpen={isRightOpen}
        disableGestures
        onChange={(menuIsOpen) => setIsRightOpen(menuIsOpen)}
      >
        <Navigation />
      </SideMenu>
    </SideMenu>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RightMenuProvider>
          <LeftMenuProvider>
            <AppRoot />
          </LeftMenuProvider>
        </RightMenuProvider>
      </Provider>
    );
  }
}
