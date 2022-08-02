import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";



import * as Location from "expo-location";

import Ionicons from "react-native-vector-icons/Ionicons";
import StatBar from "../components/StatBar";
import PlacesBitmoji from "../components/MapScreen/PlacesBitmoji";
import StatBarStack from "../navigation/StatBarStack";


export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.021216555498675,
    longitude: -118.45007599325494,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });


  //Set location
  useEffect(() => {
    (async () => {
     try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("location is : ", location)
      setCurrentRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }); 


      setLocation(regionName);
      console.log(regionName, 'nothing');

     } catch (error) {
      console.log("MapScreen.js error: ", error)
     }
    })();
  }, []);


  return (
    <View style={styles.screenContainer}>
    <StatBar screen="map" navigation={navigation} />
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
      <View style={styles.locationContainer}>
        <TouchableOpacity
          style={styles.userLocation}
          onPress={() => {
            console.log("Go to user location!");
            const { latitude, longitude } = location.coords;
            setCurrentRegion({ ...currentRegion, latitude, longitude });
          }}
        >
          <Ionicons name="ios-navigate" size={15} color="black" />
        </TouchableOpacity>
      </View>
     <PlacesBitmoji/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar:{
    width: "100%",
    height: 50,
    backgroundColor:"red",
    position: "absolute",
    top:40,

    zIndex:100

  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    height: 30,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  bitmojiContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myBitmoji: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
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
  places: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  myFriends: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
