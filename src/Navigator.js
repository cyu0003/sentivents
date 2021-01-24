import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen'
import EditScreen from './Screens/EditScreen'
import StatsScreen from './Screens/StatsScreen'

import {globalStyles} from './styles/global';

const Stack = createStackNavigator();

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
            </Stack.Navigator>
        </NavigationContainer>
      );
}