import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
export default function FriendIdentity({
  name,
  pronouns,
  ethnicity,
  gender,
  sexuality,
}) {
  return (
    // <ScrollView>
    <View style={styles.rectangle}>
      <Text>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.iconFlex}>
          {/* <Text> Hello world I'm here</Text> */}
          <Image
            source={require("../../../assets/iconHead.png")}
            style={styles.iconBit}
          ></Image>
        </View>
        <View style={styles.iconFlex2}>
          <View style={styles.shadow}>
            <View
              style={styles.shadow}
              backgroundColor="#f08247"
              borderRadius={50}
              marginBottom={10}
            >
              <Button title={pronouns} color="white" />
            </View>

            <View backgroundColor="#3d66a2" borderRadius={50}>
              <Button title={gender} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.iconFlex2}>
          <View style={styles.shadow}>
            <View
              backgroundColor="#9dc264"
              borderRadius={50}
              marginBottom={10}
              style={styles.shadow}
            >
              <Button title={ethnicity} />
            </View>

            <View backgroundColor="#f39cbc" borderRadius={50}>
              <Button title={sexuality} color="white" />
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    flexDirection: "column",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  rectangle: {
    // marginTop: 100,
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    // borderRadius: 10,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },

  iconBit: {
    justifyContent: "center",
    width: 100,
    height: 100,
  },

  containerBox: {
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    // justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    justifyContent: "center",
  },
  iconFlex2: {
    margin: 4,
    width: 100,
    height: 100,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  iconFlex: {
    backgroundColor: "#f8f8f9",
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 100 / 2,
    justifyContent: "center",
  },

  headerText: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    padding: 60,
  },
});
