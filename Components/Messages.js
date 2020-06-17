import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Messages extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Messages</Text>
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

export default Messages
