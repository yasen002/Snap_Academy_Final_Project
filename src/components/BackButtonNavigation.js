import React from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapTopIcon from './profile/MapTopIcon';

export default function BackButtonNavigation({navigation}) {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    style={{zIndex:10}}
    onPress={() => {
        navigation()
    //   navigation.navigate("Profile");
    //   console.log("hi");
    }}
    >
    
    <View style={{position:"absolute", top:20, left:20, zIndex:10000}}  >
      <MapTopIcon imageUrl={require("../../assets/left-arroww.png")} smallest={true} />
    </View>
  </TouchableOpacity>
    )
}
