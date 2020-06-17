import React, {useContext} from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Account from '../Components/Account'
import Maps from '../Components/Maps'
import Add from '../Components/Add'
import Messages from '../Components/Messages'
import Friends from '../Components/Friends'

import Icon from '../Components/Icons'
import { LeftMenuContext } from '../Contexts/LeftMenuContext';
import { RightMenuContext } from '../Contexts/RightMenuContext';

const LeftTabButton = () => {
  const { setIsOpen } = useContext(LeftMenuContext);
  return <Icon name="rr-user-circle" size={40} color="#1f4161" onPress={() => setIsOpen(true)} />;
};

const RightTabButton = () => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  return <Icon name="rr-user-friends" size={40} color="#1f4161" onPress={() => {
    console.log("Right")
    setIsRightOpen(true);
  }} />;
};

const MiddleTabButton = props => {
  const { setIsRightOpen } = useContext(RightMenuContext);
  const { setIsOpen } = useContext(LeftMenuContext);
  return <Icon name={props.iconName} style={props.style || {}} size={props.size} color={props.color} onPress={() => {
    setIsOpen(false);
    setIsRightOpen(false);
    props.onPress();
  }} />;
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: () => <LeftTabButton />
      }
    },
    Maps: {
      screen: Maps,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
          return <MiddleTabButton iconName="rr-globe" size={40} color="#1f4161" onPress={e => {
            console.log("Maps");
            navigation.navigate("Maps");
          }} />
        }
      })
    },
    Add: {
      screen: Add,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="rr-plus-circle" size={80} color="#05c793" style={styles.add}/>
        }
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="rr-mail" size={40} color="#1f4161" />
        }
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarIcon: () => <RightTabButton />
      }
    }
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: '#fff',
      showLabel: false,
      showIcon: true,
    },
    initialRouteName: "Maps"
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  add: {
    marginTop: -25
  }
})

export default createAppContainer(AppTabNavigator)
