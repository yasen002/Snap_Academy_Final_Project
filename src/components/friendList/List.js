import React from "react";
import { ScrollView, View } from "react-native";
import FriendIdentity from "./FriendIdentity";
export default function List() {
  return (
    <View style={{ padding: 10, paddingTop: 100, borderRadius: 15 }}>
      <ScrollView>
        <FriendIdentity />
        <FriendIdentity />
        <FriendIdentity />
        <FriendIdentity />
        <FriendIdentity />
      </ScrollView>
    </View>
  );
}
