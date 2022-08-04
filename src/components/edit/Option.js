import React from "react";
import { View, Text } from "react-native";
import SelectedList from "react-native-dropdown-select-list";

export default function Option({ inputText, title, data }) {
  const [selected, setSelected] = React.useState("");

  return (
    <View>
      <View paddingTop={30} justifyContent="center">
        <Text
          style={{
            paddingLeft: 5,
            paddingBottom: 5,
            fontSize: 17,
            fontFamily: "Graphik-Semibold",
          }}
        >
          {title}
        </Text>
        <SelectedList
          backgroundColor="white"
          marginRight={10}
          data={data}
          setSelected={setSelected}
          boxStyles={{
            backgroundColor: "white",
          }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
          dropdownTextStyles={{ color: "black" }}
          dropdownStyles={{
            backgroundColor: "white",
          }}
          inputStyles={{
            paddingTop: 3,
            color: "grey",
            fontFamily: "Graphik-Regular",
          }}
          placeholder={inputText}
          maxHeight={200}
          marginBottom={20}
          marginLeft={40}
          search={false}
        />
      </View>
    </View>
  );
}
