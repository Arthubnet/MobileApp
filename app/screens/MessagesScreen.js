import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    // Screen is my component
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(mesagge) => mesagge.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
