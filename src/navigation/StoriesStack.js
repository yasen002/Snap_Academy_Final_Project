import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import StoriesScreen from "../screens/StoriesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IdentityScreen from "../screens/IdentityScreen";
import FriendsScreen from "../screens/FriendsScreen";


export default function StoriesStack({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stories" component={StoriesScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false,headerTransparent:true}}/>
      <Stack.Screen name="Identity" component={IdentityScreen} options={{title: "  ",headerBackTitleVisible: false, headerTransparent:true, tabBarShowLabel: false}} />
      <Stack.Screen name="Friend" component={FriendsScreen} options={{title:"Friends", headerTransparent:true}}/>

    </Stack.Navigator>
  );
}
