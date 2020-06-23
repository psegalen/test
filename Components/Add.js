import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Add extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add</Text>
        <Button
          onPress={() => this.props.navigation.navigate("AddDetails")}
          title="Go to details"
        />
        <Button
          onPress={() => this.props.navigation.goBack(null)}
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

export default Add;
