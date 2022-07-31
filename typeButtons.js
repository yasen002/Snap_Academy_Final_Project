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
    backgroundColor: "white",
    padding: 18,
    width: "30%",
    height: 60,
    borderRadius: 20,
  },
  text: {
    fontSize: 1,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default CButton;
