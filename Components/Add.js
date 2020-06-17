import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Add extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Add</Text>
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

export default Add
