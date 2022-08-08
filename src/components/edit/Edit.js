import React from "react";
import { View, Text, Linking } from "react-native";
import Option from "./Option";
import CompleteButton from "../../../CompleteButton";
import { useFonts } from "expo-font";

//Redux import
import { useSelector, useDispatch } from 'react-redux'
import { updateGender, updateEthnicity, updatePronoun, updateSexuality } from "../../features/identity/identitySlice";

export default function Edit() {
  //user redux states
  const genderOptions = useSelector((state) => state.identity.genderOptions)
  const pronounOptions = useSelector((state) => state.identity.pronounOptions)
  const ethnicityOptions = useSelector((state) => state.identity.ethnicityOptions)
  const sexualityOptions = useSelector((state) => state.identity.sexualityOptions)

  const gender = useSelector((state) => state.identity.gender)
  const ethnicity = useSelector((state) => state.identity.ethnicity)
  const sexuality = useSelector((state) => state.identity.sexuality)
  const pronoun = useSelector((state) => state.identity.pronoun)
  const dispatch = useDispatch()

  const handleEdit=(selected)=>{
    const updateValue = selected.split("-");
    updateValue[1] = updateValue[1]-1;

    switch (updateValue[0]) {
      case "gender":
        dispatch(updateGender(updateValue))
        break;
      case "ethnicity":
        dispatch(updateEthnicity(updateValue))
        break;
      case "sexuality":
        dispatch(updateSexuality(updateValue))
        break;
      case "pronoun":
        dispatch(updatePronoun(updateValue))
        break;
      default:
        break;
    }
  }





  return (
    <View
      style={{ backgroundColor: "#fae268", paddingRight: 40, paddingLeft: 40 }}
    >
      <Text
        style={{
          fontFamily: "GraphikWide-Black",
          fontSize: 36,
          color: "#2a2a2a",
          textAlign: "center",
          paddingBottom: 40,
          paddingTop: 80,
        }}
      >
        Be You
      </Text>
      <Text
        style={{
          fontFamily: "Graphik-Regular",
          paddingRight: 25,
          paddingLeft: 25,
          color: "#2a2a2a",
          textAlign: "center",
        }}
      >
        In each identity category pick which best describes you. Your identities
        reflect who you truly are and your self expression.
      </Text>
      <Option
        title="Gender"
        inputText={gender===""?"Enter Gender":gender }
        handleEdit={handleEdit}
        data={genderOptions}
      />
      <Option
        title="Pronouns"
        inputText={pronoun===""?"Enter Pronouns":pronoun}
        handleEdit={handleEdit}
        data={pronounOptions}
      />

      <Option
        title="Sexuality"
        inputText={sexuality===""?"Enter Sexuality":sexuality}
        handleEdit={handleEdit}
        data={sexualityOptions}
      />
      <Option
        title="Ethnicity"
        inputText={ethnicity===""?"Enter Ethnicity":ethnicity}
        handleEdit={handleEdit}
        data={ethnicityOptions}
      />
      <Text
        style={{
          fontFamily: "Graphik-Regular",
          paddingTop: 40,
          textAlign: "center",
        }}
      >
        Not sure what to choose?
      </Text>
      <Text
        style={{
          fontFamily: "Graphik-Regular",
          textAlign: "center",
          textDecorationLine: "underline",
        }}
        onPress={() => Linking.openURL("http://google.com")}
      >
        Learn more about identities.
      </Text>
      <View
        style={{
          alignSelf: "center",
          paddingTop: 30,
        }}
      >
        <CompleteButton alignSelf="center" text="Complete" />
      </View>
    </View>
  );
}
