import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "pink",
        padding: 10,
        width: "50%",
        height: 40,
        borderRadius: 20,
        justifyContent:"center",
        alignContent: "center",
        alignItems:"center",
        
    },
    text: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },
});
export default DButton;
