import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../Components/Home";
import Maps from "../Components/Maps";
import Add from "../Components/Add";
import Messages from "../Components/Messages";
import Friends from "../Components/Friends";

import Icon from "../Components/Icons";
import { LeftMenuContext } from "../Contexts/LeftMenuContext";
import { RightMenuContext } from "../Contexts/RightMenuContext";
import AddDetails from "../Components/AddDetails";

const LeftTabButton = (props) => {
  const { setIsOpen, navigation, setNavigation } = useContext(
    LeftMenuContext
  );
  if (!navigation) {
    setNavigation(props.navigation);
  }
  return (
    <TouchableOpacity
      onPress={() => setIsOpen(true)}
      style={styles.button}
    >
      <Icon name="rr-user-circle" size={40} color="#1f4161" />
    </TouchableOpacity>
  );
};

const RightTabButton = () => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  return (
    <TouchableOpacity
      onPress={() => setIsRightOpen(true)}
      style={styles.button}
    >
      <Icon name="rr-user-friends" size={40} color="#1f4161" />
    </TouchableOpacity>
  );
};

const MiddleTabButton = (props) => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  const { setIsOpen } = useContext(LeftMenuContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsOpen(false);
        setIsRightOpen(false);
        props.onPress();
      }}
      style={styles.button}
    >
      <Icon
        name={props.iconName}
        style={props.style || {}}
        size={props.size}
        color={props.color}
      />
    </TouchableOpacity>
  );
};

const AppTabNavigator = createBottomTabNavigator(
  {
    Account: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarButtonComponent: () => (
          <LeftTabButton navigation={navigation} />
        ),
      }),
    },
    TabMaps: {
      screen: Maps,
      navigationOptions: ({ navigation }) => ({
        tabBarButtonComponent: () => {
          return (
            <MiddleTabButton
              iconName="rr-globe"
              size={40}
              color="#1f4161"
              onPress={() => navigation.navigate("Maps")}
            />
          );
        },
      }),
    },
    TabAdd: {
      screen: Add,
      navigationOptions: ({ navigation }) => ({
        tabBarButtonComponent: () => {
          return (
            <MiddleTabButton
              iconName="rr-plus-circle"
              size={80}
              color="#05c793"
              style={styles.add}
              onPress={() => navigation.navigate("Add")}
            />
          );
        },
      }),
    },
    TabMessages: {
      screen: Messages,
      navigationOptions: ({ navigation }) => ({
        tabBarButtonComponent: () => {
          return (
            <MiddleTabButton
              iconName="rr-mail"
              size={40}
              color="#1f4161"
              onPress={() => navigation.navigate("Messages")}
            />
          );
        },
      }),
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarButtonComponent: () => <RightTabButton />,
      },
    },
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "#fff",
      showLabel: false,
      showIcon: true,
    },
    initialRouteName: "Account",
  }
);

const AddStack = createStackNavigator(
  {
    AddHome: {
      screen: Add,
    },
    AddDetails: {
      screen: AddDetails,
    },
  },
  {
    headerMode: "none",
  }
);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Add: {
      screen: AddStack,
    },
    Maps: {
      screen: Maps,
    },
    Messages: {
      screen: Messages,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  add: {
    marginTop: -25,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default createAppContainer(MainStack);
