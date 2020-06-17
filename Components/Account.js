import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import SideMenu from 'react-native-side-menu'
import Left from './HamburgerLeft'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }
  render() {
    return (
      <SideMenu
        menu = <Left/>
        menuPosition = 'left'
        isOpen = {this.state.isOpen}
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

export default Account
