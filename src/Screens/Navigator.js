import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './Home';
import Graph from './Graph';

const screens = {
    Home: {
        screen: Home
    },
    Graph1: {
        screen: Graph
    },
};

const Navigator = createDrawerNavigator(screens);

export default createAppContainer(Navigator);