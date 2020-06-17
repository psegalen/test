import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

class Account extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Account</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Account
