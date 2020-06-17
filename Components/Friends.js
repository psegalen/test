import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import SideMenu from 'react-native-side-menu'
import Left from './HamburgerRight'

class Friends extends React.Component {
  render() {
    return (
      <SideMenu
        menu = <Left/>
        menuPosition = 'right'
      >
        <View style={styles.container}>
          <Text>Account</Text>
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default Friends
