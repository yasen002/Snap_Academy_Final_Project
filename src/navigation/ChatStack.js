import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";

import { getAuth, signOut } from "firebase/auth";


const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {

  const auth = getAuth();
  const user = auth.currentUser;

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
    </Stack.Navigator>
  );
}
