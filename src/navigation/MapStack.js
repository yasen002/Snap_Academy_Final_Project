import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IdentityScreen from "../screens/IdentityScreen"
import FriendsScreen from "../screens/FriendsScreen";

const Stack = createStackNavigator();

export default function MapStack({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="MapStat" component={MapScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{  headerShown: false,headerTransparent:true}}/>
      <Stack.Screen name="Friend" component={FriendsScreen} options={{title:"Friends", headerTransparent:true}}/>
      <Stack.Screen name="Identity" component={IdentityScreen} options={{title: "  ",headerBackTitleVisible: false, headerTransparent:true, tabBarShowLabel: false}} />

    </Stack.Navigator>
  );
}
