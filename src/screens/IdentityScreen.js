import React from 'react'
import {  Text } from 'react-native'
import IdentityMain from "../components/Identity/IdentityMain";

export default function IdentityScreen({ navigation }) {
  console.log(navigation, "this navigation")

  const navHandler = (page)=>{
    navigation.navigate(page);
  }

  return (
    <>
    <IdentityMain navHandler={navHandler} />
    </>
  )
}

// <TouchableOpacity
// activeOpacity={0.7}
// onPress={() => {
//   navigation.goBack();
// }}
// >
// <View style={ styles.profileModalTopLeft }>
//   <MapTopIcon imageUrl={require("../../assets/left-arroww.png")} smallest={true} />
// </View>