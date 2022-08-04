import React from "react";
import { View, ScrollView } from "react-native";
import List from "../components/friendList/List";
import Option from "../components/edit/Option";
import Edit from "../components/edit/Edit";

import IdentityMain from "../components/Identity/IdentityMain";

export default function SpotlightScreen({ navigation }) {
  return (
    <>
      {/* <IdentityMain /> */}
      {/* <List /> */}
      {/* <IdentityMain /> */}

      <ScrollView style={{ backgroundColor: "#fae268" }}>
        <Edit />
      </ScrollView>
    </>
  );
}
