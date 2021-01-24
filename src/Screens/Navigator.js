import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Graph from './Graph';
import Calendar from './Calendar'
import Diary from './Diary';

import {globalStyles} from '../styles/global';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
            >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                title: 'sentivents',
                }}
            />
            <Stack.Screen
                name="Calendar"
                component={Calendar}
                options={{
                title: 'My profile',
                }}
            />
            <Stack.Screen
                name="Graph"
                component={Graph}
                options={{
                gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name="Diary"
                component={Diary}
                options={{
                gestureEnabled: false,
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
      );
}