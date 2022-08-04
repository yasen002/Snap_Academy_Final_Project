import React from "react";
import Swiper from "react-native-web-swiper";
import GenderCategory from "./GenderCategory";
import PronounCategory from "./PronounCategory";
import SexualityCategory from "./SexualityCategory";
import EthnicityCategory from "./EthnicityCategory";

export default function IdentityMain() {

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
