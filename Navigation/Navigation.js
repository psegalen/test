import React from 'react';
import { StyleSheet, Image } from 'react-native';
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

const AppTabNavigator = createBottomTabNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="rr-user-circle" size={40} color="#1f4161" onPress={() => { console.log(Account) }}/>
        }
      }
    },
    Maps: {
      screen: Maps,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="rr-globe" size={40} color="#1f4161" />
        }
      }
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
        tabBarIcon: () => {
          return <Icon name="rr-user-friends" size={40} color="#1f4161" />
        }
      }
    }
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: '#fff',
      showLabel: false,
      showIcon: true
    }
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
