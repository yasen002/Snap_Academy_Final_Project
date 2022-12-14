import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SButton = ({ text, colortag }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        minWidth: "30%",
        height: 55,
        borderRadius: 15, //20
        marginTop: -10,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        backgroundColor: colortag,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default SButton;
