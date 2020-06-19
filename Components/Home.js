import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  TouchableOpacity,
  TextInput,
} from "react-native-gesture-handler";

const One = () => (
  <View style={styles.container}>
    <Text>One</Text>
  </View>
);
const Two = () => (
  <View style={styles.container}>
    <Text>Two</Text>
  </View>
);
const Three = () => (
  <View style={styles.container}>
    <Text>Three</Text>
  </View>
);

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "one", title: "Tab 1" },
    { key: "two", title: "Tab 2" },
    { key: "three", title: "Tab 3" },
  ]);

  const renderScene = SceneMap({
    one: One,
    two: Two,
    three: Three,
  });

  const renderTabBar = (props) => (
    <View style={styles.tabBar}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche..."
        />
        <TouchableOpacity>
          <Text style={{ color: "#FFF" }}>Icon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuRow}>
        {props.navigationState.routes.map((route, index) => {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => props.jumpTo(route.key)}
              style={[
                styles.menuItem,
                index === props.navigationState.index
                  ? styles.selectedItem
                  : undefined,
              ]}
            >
              <Text style={styles.menuText}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get("window").width }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    backgroundColor: "#05C793",
    paddingTop: 40,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuItem: {
    paddingVertical: 8,
  },
  selectedItem: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  menuText: {
    color: "#FFF",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 8,
  },
});

export default Home;
