import React from "react";
import { ScrollView, View } from "react-native";
import FriendIdentity from "./FriendIdentity";
export default function List() {
  return (
    <View style={{ padding: 10, paddingTop: 100, borderRadius: 15 }}>
      <ScrollView>
        <FriendIdentity
          name="Ingrid"
          pronouns="She/Her"
          ethnicity="Latina"
          sexuality="Pansexual"
          gender="Woman"
        />
        <FriendIdentity
          name="Kenny"
          pronouns="He/Him"
          ethnicity="Black"
          sexuality="Bisexual"
          gender="Man"
        />
        <FriendIdentity
          name="Angel"
          pronouns="He/Him"
          ethnicity="Latino"
          sexuality="Gay"
          gender="Man"
        />
        <FriendIdentity
          name="K"
          pronouns="He/Him"
          ethnicity="Asian"
          sexuality="Gay"
          gender="Man"
        />
        <FriendIdentity
          name="Viviana"
          pronouns="She/Her"
          ethnicity="Latina"
          sexuality="Straight"
          gender="Woman"
        />
        <FriendIdentity
          name="Yasen"
          pronouns="He/Him"
          ethnicity="Asian"
          sexuality="Straight"
          gender="Man"
        />
      </ScrollView>
    </View>
  );
}
