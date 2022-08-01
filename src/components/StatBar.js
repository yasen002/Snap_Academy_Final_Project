import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function StatBar({ navigation, returnName }) {
const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
  <View style={styles.container}>
    <View >
      <Image
        style={styles.bitmojiImage}
        source={require("../../assets/snapchat/personalBitmoji.png")} //<i class="fa-solid fa-magnifying-glass"></i>
      />
    </View>
    
  <View style={styles.iconContainer} >
    <Icon name="search" size={15} color="#ffffff" />
  </View>
  </View>
  );
}

const styles = StyleSheet.create({  
  container:{
    position: 'absolute',
    width: "100%",
    height: 50,
    position: "absolute",
    top:40,
    zIndex:100,
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bitmojiImage:{
    width: 40,
    height: 40,
    marginLeft:10,
  }, 
  iconContainer:{
    position:"relative",
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor:"rgba(104,104,104, 0.55)",
    borderRadius:35,
    marginLeft:10,
  }
});

