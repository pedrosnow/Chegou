import React from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Restaurante from '../screens/Restaurante';
import Mercado from '../screens/Home';


const Tab = createMaterialTopTabNavigator();

export default () => (
    <Tab.Navigator  >
        <Tab.Screen name="Restaurante" component={Restaurante} />
        <Tab.Screen name="Mercado" component={Mercado} />
    </Tab.Navigator>
)