import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen'
import EditScreen from './Screens/EditScreen'
import StatsScreen from './Screens/StatsScreen'
import Calendar from './Screens/Calendar'
import { BottomNavigation } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                    headerTintColor: '#f0f0f0',
                    headerStyle: { backgroundColor: '#6545D8' },
                    }}
                />
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                    options={{
                    headerTintColor: '#f0f0f0',
                    headerStyle: { backgroundColor: '#6545D8' },
                    }}
                />
                <Stack.Screen
                    name="Stats"
                    component={StatsScreen}
                    options={{
                    headerTintColor: '#f0f0f0',
                    headerStyle: { backgroundColor: '#6545D8' },
                    }}
                />
                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{
                    headerTintColor: '#f0f0f0',
                    headerStyle: { backgroundColor: '#6545D8' },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}