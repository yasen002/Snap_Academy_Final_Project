import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    marginRight: 5, // space between the yellow and pink button 
    padding: 16,
    width: "30%",
    height: 50,
    borderRadius: 20, //20
    
  },
  text: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default SButton;
