import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Messages</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Close"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Messages;
