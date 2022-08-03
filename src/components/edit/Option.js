import React from "react";
import { View, Text } from "react-native";
import SelectedList from "react-native-dropdown-select-list";

export default function Option({}) {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "a" },
    { key: "2", value: "b" },
    { key: "3", value: "c" },
    { key: "4", value: "d" },
    { key: "5", value: "e" },
    { key: "6", value: "f" },
    { key: "7", value: "g" },
    { key: "8", value: "h" },
  ];
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 50, flex: 1 }}>
      <SelectedList
        data={data}
        setSelected={setSelected}
        dropdownStyle={{ backgroundColor: "grey" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "black" }}
        placeholder="Select state"
        maxHeight={200}
      />
    </View>
  );
}
