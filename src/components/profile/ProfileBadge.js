import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function ProfileBadge ({ imageUrl, text, containerStyle, textStyle }) {
    return (
      <View style={ [styles.profileBadgeContainer, containerStyle] }>
      <View style={ styles.profileBadge }>
        <Image style={ styles.profileBadgeImage } source={ imageUrl } />
        <Text style={ [styles.profileBadgeText, textStyle] }>{ text }</Text>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  profileBadgeContainer: {
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },
  profileBadge: {
    flexDirection: "row",
    backgroundColor: "#f7f8f8",
    borderRadius: 30,
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  profileBadgeImage: {
    width: 15,
    height: 15
  },

  profileBadgeText: {
    color: "#666d77",
    fontSize: 12,
    marginLeft: 5,
  }
  });
