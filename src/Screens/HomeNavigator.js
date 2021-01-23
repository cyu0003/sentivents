import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

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

const HomeNavigator = createStackNavigator(screens);

export default createAppContainer(HomeNavigator);