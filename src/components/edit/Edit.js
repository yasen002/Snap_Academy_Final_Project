import React from "react";
import { View, Text, Linking } from "react-native";
import Option from "./Option";
import CompleteButton from "../../../CompleteButton";
import { useFonts } from "expo-font";

export default function Edit() {
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
        My {"\n"}Identities
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
        inputText="Enter Gender"
        data={[
          { key: "1", value: "Man" },
          { key: "2", value: "Woman" },
          { key: "3", value: "Transgender" },
          { key: "4", value: "Non-binary/Non-comforming" },
          { key: "5", value: "No Preference" },
          { key: "6", value: "Other" },
        ]}
      />
      <Option
        title="Pronouns"
        inputText="Enter Pronouns"
        data={[
          { key: "1", value: "he/him" },
          { key: "2", value: "she/her" },
          { key: "3", value: "they/them" },
          { key: "4", value: "No Preference" },
          { key: "5", value: "Other" },
        ]}
      />

      <Option
        title="Sexuality"
        inputText="Enter Sexuality"
        data={[
          { key: "1", value: "Heterosexual" },
          { key: "2", value: "Bisexual" },
          { key: "3", value: "Homosexual" },
          { key: "4", value: "Pansexual" },
          { key: "5", value: "Asexual" },
          { key: "6", value: "No Preference" },
          { key: "7", value: "Other" },
        ]}
      />
      <Option
        title="Ethnicity"
        inputText="Enter Ethnicity"
        data={[
          { key: "1", value: "White" },
          { key: "2", value: "Black or African" },
          { key: "3", value: "Hispanic" },
          { key: "4", value: "Indian or Alaska Native" },
          { key: "5", value: "Asian" },
          { key: "6", value: "Native Hawaiin or other Pacific Islander" },
          { key: "7", value: "Preference" },
          { key: "7", value: "Other" },
        ]}
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
