import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CButton from "../../../typeButtons";
import SButton from "../../../smallButtons";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActionButton from "./button/ActionButton";
const BANNER_H = 350;

export default function IdentityCategory({
  category,
  title,
  message,
  navigation,
}) {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Drawer top  */}
        <View style={styles.bannerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require("../../../assets/sticker1.png")}
          />
        </View>

        <View style={styles.bannerDrawer}>
          <CButton text={category} />
          <View position="absolute" top={-30} right={80} bottom={30}>
            <TouchableOpacity position="relative" top={-100}>
              <Ionicons
                name="information-circle-outline"
                size={45}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View alignItems="center" style={styles.parent}>
            <SButton text={"Female"} colortag={"#F08247"} />
          </View>

          <View flexDirection="row" justifyContent="center" paddingTop={10}>
            <ActionButton icon="ios-camera-outline" />
            <ActionButton icon="ios-pencil-outline" />
            <ActionButton icon="ios-people-outline" />
          </View>

          <Text style={styles.title}>{message}</Text>
          <Image
            source={require("../../../assets/sticker.png")}
            style={styles.templateLeft}
          ></Image>

          <Image
            source={require("../../../assets/sticker.png")}
            style={styles.templateRight}
          ></Image>

          <Image
            source={require("../../../assets/sticker.png")}
            style={styles.templateLeft}
          ></Image>
          <Image
            source={require("../../../assets/sticker.png")}
            style={styles.templateRight}
          ></Image>

          <View paddingTop={300} justifyContent="center" alignItems="center">
            <Text>Learn more about identities</Text>
            <Text
              style={{ color: "orange" }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Google
            </Text>
            <Text
              style={{ color: "orange" }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Google
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBit: {
    width: 50,
    height: 50,
  },

  containerBox: {
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    // justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  iconFlex: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  },

  headerText: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    padding: 60,
  },

  templateLeft: {
    marginTop: 30,
    width: 150,
    height: 150,
    marginRight: 200,
  },
  templateRight: {
    width: 150,
    height: 150,
    marginRight: -200,
  },

  buttonStyle: {
    justifyContent: "center",
  },
  containerw: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: "space-around",
    //justifyContent: 'space-evenly',
    justifyContent: "space-around",
  },
  //icons for edit, view friends etc.
  iconsContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    width: 375,
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderRadius: 30,
    marginBottom: 130,
  },

  bannerDrawer: {
    justifyContent: "center",
    backgroundColor: "white", // background color for card
    width: 410, //change size after completed project for iphone
    // borderTopEndRadius: 30,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    // marginBottom: 130, //caused the yellow space underneath to show fixed!!
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    backgroundColor: "#F08247",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    fontFamily: "Avenir",
    flex: 1,
  },
  container2: {
    alignItems: "center",
  },
  container3: {
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    paddingTop: 50,
    paddingRight: 60,
    paddingLeft: 60,
    paddingBottom: 10,
    fontFamily: "GraphikWide-Black",
    fontSize: 38,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 100,
    color: "white",
  },

  pronouns: {
    fontFamily: "Avenir",
    fontSize: 54,
    fontWeight: "bold",
    //backgroundColor:'white',
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: "white",
  },
  miniHeader: {
    fontFamily: "Avenir",
    fontSize: 20,
    backgroundColor: "white",
    //justifyContent:'center',
    textAlign: "center",
    borderRadius: 20,
    paddingTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 20,
  },

  banner: (scrollA) => ({
    justifyContent: "center",
    height: 350,
    width: "100%",

    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});
