import React, { useContext } from "react";
import { StyleSheet, Image, Alert } from "react-native";
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

const LeftTabButton = () => {
  const { setIsOpen } = useContext(LeftMenuContext);
  return (
    <Icon
      name="rr-user-circle"
      size={40}
      color="#1f4161"
      onPress={() => setIsOpen(true)}
    />
  );
};

const RightTabButton = () => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  return (
    <Icon
      name="rr-user-friends"
      size={40}
      color="#1f4161"
      onPress={() => {
        console.log("Right");
        setIsRightOpen(true);
      }}
    />
  );
};

const MiddleTabButton = (props) => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  const { setIsOpen } = useContext(LeftMenuContext);
  return (
    <Icon
      name={props.iconName}
      style={props.style || {}}
      size={props.size}
      color={props.color}
      onPress={() => {
        setIsOpen(false);
        setIsRightOpen(false);
        props.onPress();
      }}
    />
  );
};

const AppTabNavigator = createBottomTabNavigator(
  {
    Account: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <LeftTabButton />,
      },
    },
    TabMaps: {
      screen: Maps,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
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
        tabBarIcon: () => {
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
        tabBarIcon: () => {
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
        tabBarIcon: () => <RightTabButton />,
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

const MainStack = createStackNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Add: {
      screen: Add,
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
});

export default createAppContainer(MainStack);
