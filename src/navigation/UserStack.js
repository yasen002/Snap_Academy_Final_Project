import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native";
import { getAuth, signOut } from "firebase/auth";
// Screens
import CameraScreen from "../screens/CameraScreen";
// Stacks
import ChatStack from "./ChatStack";
import MapStack from "./MapStack";
import StoriesStack from "./StoriesStack";
import SpotlightStack from "./SpotlightStack";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  const auth = getAuth();
  const user = auth.currentUser;
  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              user = null;
            })
            .catch((error) => {
              // An error happened.
              console.log("UserStack.js Error: ", error)
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        initialRouteName="Camera"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "Map") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "ChatStack") {
              iconName = "ios-chatbox-outline";
              iconColor = focused ? "#2b83b3" : "grey";
            } else if (route.name === "Camera") {
              iconName = focused ? "ios-scan-circle-outline" : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "Stories") {
              iconName = "ios-people-outline";
              iconColor = focused ? "purple" : "grey";
            } else if (route.name === "Spotlight") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        <Tab.Screen 
        name="Map" component={MapStack} 
        options={{...screenOptions, headerShown: false}} />
        <Tab.Screen 
        name="ChatStack" component={ChatStack} 
        options={{...screenOptions, headerShown: false}}
         />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{...screenOptions, headerShown: false}} 
        />
        <Tab.Screen
          name="Stories"
          component={StoriesStack}
          options={{...screenOptions,  headerShown: false}}
        />
        <Tab.Screen
          name="Spotlight"
          component={SpotlightStack}
          options={{...screenOptions, headerShown:false,tabBarShowLabel: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
