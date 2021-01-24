import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import Calendar from './Calendar'
import EditScreen from './EditScreen'
import StatsScreen from './StatsScreen'

import {globalStyles} from '../styles/global';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Calendar}
                    options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                    }}
                />
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                />
                <Stack.Screen
                    name="Stats"
                    component={StatsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}