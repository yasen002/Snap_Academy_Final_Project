

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    padding: 23,
    width: "50%",
    height: 70,
    borderRadius: 20,
    position: 'relative',
    top: -20,
    
  },
  text: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default CButton;
