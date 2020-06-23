import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AddDetails = (props) => {
  return (
    <View style={styles.container}>
      <Text>Add Details !</Text>
      <Button
        onPress={() => props.navigation.goBack()}
        title="Go back to Add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddDetails;
