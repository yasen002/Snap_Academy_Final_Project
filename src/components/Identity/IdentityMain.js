import React from "react";
import Swiper from "react-native-web-swiper";
import GenderCategory from "./GenderCategory";
import PronounCategory from "./PronounCategory";
import SexualityCategory from "./SexualityCategory";
import EthnicityCategory from "./EthnicityCategory";

export default function IdentityMain() {
  return (
    <Swiper
      style={{ backgroundColor: "yellow" }}
      loop={true}
      controlsProps={{ prevPos: false, nextPos: false }}
    >
      <GenderCategory
        category="Gender"
        title="Be You"
        message="Identity is up to you"
      />
      <PronounCategory
        category="Pronoun"
        title="Be You"
        message="My identity is my super power"
      />
      <SexualityCategory
        category="Sexuality"
        title="Be You"
        message="Some message for Sexuality Page"
      />
      <EthnicityCategory
        category="Ethnicity"
        title="Be You"
        message="Some message for Ethnicity Page"
      />
    </Swiper>
  );
}
