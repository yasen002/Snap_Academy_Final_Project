import React, { useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  Linking,
  Button,
} from "react-native";
import Swiper from "react-native-web-swiper";
import { useFonts } from "expo-font";
import { BANNER_H } from "../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import CButton from "../../../typeButtons";
import SButton from "../../../smallButtons";
import Ionicons from "react-native-vector-icons/Ionicons";
import GenderCategory from "./GenderCategory";
import PronounCategory from "./PronounCategory";
import SexualityCategory from "./SexualityCategory";
import EthnicityCategory from "./EthnicityCategory";

export default function IdentityMain({ navigation }) {
  const [loaded] = useFonts({
    Avenir: require("../../../fonts/AvenirNextLTPro-Bold.otf"),
  });
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Swiper>
      <GenderCategory
        category="Gender"
        title="My Identities"
        message="Identity is up to you"
      />
      <PronounCategory
        category="Pronoun"
        title="My Identities"
        message="My identity is my super power"
      />
      <SexualityCategory
        category="Sexuality"
        title="My Sexuality"
        message="Some message for Sexuality Page"
      />
      <EthnicityCategory
        category="Ethnicity"
        title="My Ethnicity"
        message="Some message for Ethnicity Page"
      />
    </Swiper>
  );
}
