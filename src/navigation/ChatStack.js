import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialIcons'
// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IdentityScreen from "../screens/IdentityScreen";
const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {
  let screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
  }; 


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{  headerShown: false,headerTransparent:true}} />
      <Stack.Screen name="Identity" component={IdentityScreen} options={{title: "  ",headerBackTitleVisible: false, headerTransparent:true, tabBarShowLabel: false}} />

    </Stack.Navigator>
  );
}
