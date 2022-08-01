import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
  } from "react-native";


export default function PlacesBitmoji() {
  return (
    <View style={styles.bitmojiContainer}>
        <View style={styles.bitmoji}>
        <Image
            style={styles.bitmojiImage}
            source={require("../../../assets/snapchat/personalBitmoji.png")}
        />
        <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>My Bitmoji</Text>
        </View>
        </View>
        <View style={styles.bitmoji}>
        <Image
            style={styles.bitmojiImage}
            source={require("../../../assets/snapchat/personalBitmoji.png")}
        />
        <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>Places</Text>
        </View>
        </View>
        <View style={styles.bitmoji}>
        <Image
            style={styles.bitmojiImage}
            source={require("../../../assets/snapchat/personalBitmoji.png")}
        />
        <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>Friends</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bitmojiContainer: {
      width: "100%",
      height: 70,
      position: "absolute",
      bottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    bitmojiImage: {
      width: 50,
      height: 50,
    },
    bitmojiTextContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 4,
    },
    bitmojiText: {
      fontSize: 10,
      fontWeight: "700",
    },
      bitmoji: {
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      },
  });
  