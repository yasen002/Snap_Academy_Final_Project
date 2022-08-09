import StatBar from "../components/StatBar";
import React from "react";
import { View, Text,ScrollView } from "react-native";
import { useSelector } from 'react-redux'

export default function SpotlightScreen({ navigation }) {
  const identityActive = useSelector((state) => state.identity.identityActive)
  return (
    <>
      <View >
      <View style={{ height:93}}>
        <StatBar screen="map" navigation={navigation} />
      </View>
      <Text>Hi from SpotLight</Text>
    </View>
       
    </>
  );
}
