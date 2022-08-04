import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SButton = ({ text, colortag }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // marginRight: 5, // space between the yellow and pink button
    padding: 16,
    width: "30%",
    height: 50,
    borderRadius: 15, //20
    marginTop: -10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default SButton;
