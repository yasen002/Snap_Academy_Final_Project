import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ActionButton({icon}) {
  return (
    <View marginRight={30}>
      <TouchableOpacity>
        <Ionicons name={icon} size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
