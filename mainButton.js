import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {useFonts} from 'expo-font';
import { BorderlessButton } from "react-native-gesture-handler";

const MButton = ({ text,sub }) => {
  
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
      <Text style={styles.text}>{text}{"\n"}</Text>
      <Text style={styles.sub}>{sub}</Text>

      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sub:{
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontFamily: 'Avenir',
  },
  button: {
    backgroundColor: "blue",
    //padding: 18,
    width: "75%",
    height: 100,
    borderRadius: 50,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    
  },
  text: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
});
export default MButton;
