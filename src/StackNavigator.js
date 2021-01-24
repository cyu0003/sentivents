import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator'
import EditScreen from './Screens/EditScreen'
import StatsScreen from './Screens/StatsScreen'

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
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
            </Stack.Navigator>
        </NavigationContainer>
      );
}