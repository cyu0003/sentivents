import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Graph from './Graph';
import Calendar from './Calendar'
import Diary from './Diary';
import EditScreen from './EditScreen';

import {globalStyles} from '../styles/global';

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerStyle={globalStyles.navStyle}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Graph" component={Graph} />
                <Drawer.Screen name="Calendar" component={Calendar} />
                <Drawer.Screen name="Diary" component={Diary} />
                <Drawer.Screen name="Edit" component={EditScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}