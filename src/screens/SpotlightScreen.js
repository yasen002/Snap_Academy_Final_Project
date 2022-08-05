import StatBar from "../components/StatBar";
import React from "react";
import { View, ScrollView } from "react-native";
import List from "../components/friendList/List";
import Option from "../components/edit/Option";
import Edit from "../components/edit/Edit";

import IdentityMain from "../components/Identity/IdentityMain";
import GenderCategory from "../components/Identity/GenderCategory";

export default function SpotlightScreen({ navigation }) {
  return (
    <>
      {/* <IdentityMain /> */}
      {/* <List /> */}
      {/* <IdentityMain /> */}

      {/* <View >
      <View style={{ height:93}}>
        <StatBar screen="map" navigation={navigation} />
      </View>
      <Text>Hi from SpotLight</Text>
    </View> */}

      <ScrollView style={{ backgroundColor: "#fae268" }}>
        {/* <Edit /> */}
        <GenderCategory
          category="Gender"
          title="Be You"
          message="Identity is up to you"
        />
      </ScrollView>
      {/* <IdentityMain /> */}
    </>
  );
}
