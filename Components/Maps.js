import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Maps extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Maps</Text>
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

export default Maps
