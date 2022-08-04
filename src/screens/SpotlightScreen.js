import React from 'react'
import IdentityMain from '../components/Identity/IdentityMain';
import ProfileScreen from "./ProfileScreen"
import {View, Text} from "react-native"
import StatBar from "../components/StatBar"
export default function SpotlightScreen({navigation}) {
  return (
     <View >
      <View style={{ height:93}}>
        <StatBar screen="map" navigation={navigation} />
      </View>
      <Text>Hi from SpotLight</Text>
    </View>
     
  )
}