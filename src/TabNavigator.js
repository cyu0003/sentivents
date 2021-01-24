import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen'
import Calendar from './Screens/Calendar';

import { globalStyles } from './styles/global';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#6545D8' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
      );
}