import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SpotlightScreen from "./src/screens/SpotlightScreen";
import Gender from "./src/screens/Gender";

const Stack = createStackNavigator();

export default function Identity() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenSpotlight" >
        <Stack.Screen name="ScreenSpotlight" component={SpotlightScreen} />
        <Stack.Screen name="Gender" component={Gender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
