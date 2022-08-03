import React from "react";
import { View, ScrollView } from "react-native";
import List from "../components/friendList/List";
import Option from "../components/edit/Option";
import Edit from "../components/edit/Edit";

import IdentityMain from "../components/Identity/IdentityMain";

export default function SpotlightScreen({ navigation }) {
  return (
    <>
      {/* <IdentityMain /> */}
      {/* <List /> */}
      {/* <IdentityMain /> */}

      <ScrollView style={{ backgroundColor: "#fae268" }}>
        <Edit />
        {/* <Option
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
        /> */}
      </ScrollView>
    </>
  );
}
