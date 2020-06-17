import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

class Left extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.text}>Left Panel</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f4161'
  },
  text: {
    color: '#fff'
  }
})

export default Left
