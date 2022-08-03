import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import StoriesScreen from "../screens/StoriesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IdentityScreen from "../screens/IdentityScreen";
const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stories" component={StoriesScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTransparent:true}}/>
      <Stack.Screen name="Identity" component={IdentityScreen} options={{ headerTransparent:true}} />
    </Stack.Navigator>
  );
}
