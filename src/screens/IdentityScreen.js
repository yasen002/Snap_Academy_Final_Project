import React from 'react'
import {  ScrollView } from 'react-native'
import IdentityMain from "../components/Identity/IdentityMain";
import { useSelector } from 'react-redux';
import Edit from '../components/edit/Edit';
export default function IdentityScreen({ navigation }) {
  const identityActive = useSelector((state) => state.identity.identityActive);

  const navHandler = (page)=>{
    navigation.navigate(page);
  }

  return (
    <>
      {identityActive===true ?<IdentityMain navHandler={navHandler} />:<ScrollView><Edit/></ScrollView>  }
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