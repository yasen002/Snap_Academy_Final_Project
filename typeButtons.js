import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CButton = ({ text }) => {
  return (
    <TouchableOpacity disabled={true} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 23,
    width: "60%",
    height: 80,
    borderRadius: 20,
    position: "relative",
    top: -20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    fontSize: 35,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Graphik-Semibold",
  },
});
export default CButton;
