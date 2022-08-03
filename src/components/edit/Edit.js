import React from "react";
import { View, Text } from "react-native";
import Option from "./Option";
export default function Edit() {
  return (
    <View>
      <Text>Hi from Edit Page</Text>
      <Text>this is another texts from Edit page</Text>
      <Option title="Gender" options={["he", "him", "she", "her"]} />
      <Option title="Gender" options={["he", "him", "she", "her"]} />
      <Option title="Gender" options={["he", "him", "she", "her"]} />
      <Option title="Gender" options={["he", "him", "she", "her"]} />
      <Option title="Gender" options={["he", "him", "she", "her"]} />
    </View>
  );
}
