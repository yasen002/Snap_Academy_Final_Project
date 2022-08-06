import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {useDispatch } from 'react-redux'
import { activateIdentity } from "./src/features/identity/identitySlice";

export default function CompleteButton({text}) {
  const dispatch = useDispatch();

  const completeEditPage = ()=>{
    dispatch(activateIdentity())
  }
  return (
    <TouchableOpacity onPress={completeEditPage} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    fontFamily: "Graphik-Regular",
    backgroundColor: "#2a2a2a",
    marginRight: 5,
    padding: 16,
    width: "70%",
    height: 50,
    borderRadius: 20, //20
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
