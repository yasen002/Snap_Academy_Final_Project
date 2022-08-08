import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IdentityScreen from "../screens/IdentityScreen";
import FriendsScreen from "../screens/FriendsScreen";

const Stack = createStackNavigator();

export default function SpotlightStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SpotlightStatBar" component={SpotlightScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{  headerShown: false,headerTransparent:true}}/>
      <Stack.Screen name="Friend" component={FriendsScreen} options={{title:"Friends",headerBackTitleVisible:false,headerTransparent:true}}/>
      <Stack.Screen name="Identity" component={IdentityScreen} options={{title: "  ",headerBackTitleVisible: false, headerTransparent:true, tabBarShowLabel: false}} />
    </Stack.Navigator>
  );
}
