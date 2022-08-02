import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from '../screens/HomeScreen';
// import ChatScreen from '../screens/ChatScreen';
import StatBar from '../components/StatBar';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function StatBarStack() {	
	return (
			<Stack.Navigator>
				<Stack.Screen name="StatBar" component={StatBar} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
			</Stack.Navigator>
	);
}