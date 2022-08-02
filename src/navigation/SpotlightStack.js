import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export default function SpotlightStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spotlight" component={SpotlightScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTransparent:true}}/>
    </Stack.Navigator>
  );
}