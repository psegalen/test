import React, { useContext } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { LeftMenuContext } from "../Contexts/LeftMenuContext";

const Left = () => {
  const { setIsOpen, navigation } = useContext(LeftMenuContext);
  return (
    <View style={styles.panel}>
      <Text style={styles.text}>Left Panel</Text>
      <Button
        title="Open Messages"
        onPress={() => {
          setIsOpen(false);
          navigation.navigate("Messages");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f4161",
  },
  text: {
    color: "#fff",
  },
});

export default Left;
