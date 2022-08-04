import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function ProfileCard ({ imageUrl, text, style }) {
    return (
      <View style={ [styles.profileCard, style ]}>
        <Text style={ styles.profileCardHeader }>{ text }</Text>
        <View style={ [styles.profileCardContainer, styles.shadowProp ] }>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
  },
  profileCardHeader: {
    fontSize: 15,
    fontWeight: "600",
  },
  profileCardContainer: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
});
