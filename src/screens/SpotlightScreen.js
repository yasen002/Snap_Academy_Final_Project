import StatBar from "../components/StatBar";
import React from "react";
import { View, ScrollView } from "react-native";
import List from "../components/friendList/List";
import Option from "../components/edit/Option";
import Edit from "../components/edit/Edit";
import { useSelector } from 'react-redux'

import IdentityMain from "../components/Identity/IdentityMain";
import GenderCategory from "../components/Identity/GenderCategory";

export default function SpotlightScreen({ navigation }) {
  const identityActive = useSelector((state) => state.identity.identityActive)

  return (
    <>
      {/* <IdentityMain /> */}
      {/* <List /> */}
      {identityActive===true ? <IdentityMain />:<ScrollView><Edit/></ScrollView>  }

      {/* <View >
      <View style={{ height:93}}>
        <StatBar screen="map" navigation={navigation} />
      </View>
      <Text>Hi from SpotLight</Text>
    </View> */}
        {/* <Edit /> */}

      {/* <ScrollView style={{ backgroundColor: "#fae268" }}>
        <GenderCategory
          category="Gender"
          title="Be You"
          message="Identity is up to you"
        />
      </ScrollView> */}
      {/* <IdentityMain /> */}
    </>
  );
}
