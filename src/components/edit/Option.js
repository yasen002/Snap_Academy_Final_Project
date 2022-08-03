import React from "react";
import { View, Text } from "react-native";
import SelectedList from "react-native-dropdown-select-list";

export default function Option({ inputText, title, data }) {
  const [selected, setSelected] = React.useState("");
  //   const data = [
  //     { key: "1", value: "he/him" },
  //     { key: "2", value: "she/her" },
  //     { key: "3", value: "they/them" },
  //     { key: "4", value: "No Preference" },
  //     { key: "5", value: "Type in" },
  //   ];
  // gather all data and forward it
  return (
    <View>
      <View paddingTop={30} justifyContent="center">
        <Text style={{ paddingLeft: 5, paddingBottom: 5 }}>{title}</Text>
        <SelectedList
          marginRight={10}
          data={data}
          setSelected={setSelected}
          dropdownStyle={{ backgroundColor: "grey" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
          dropdownTextStyles={{ color: "black" }}
          placeholder={inputText}
          maxHeight={200}
          marginBottom={20}
          marginLeft={40}
        />
      </View>
    </View>
  );
}
