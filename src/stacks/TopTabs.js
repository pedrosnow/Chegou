import React from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Mercado from '../screens/Merdado/index'
import Home from '../screens/Home/index';

export default ()=> (

  <Tab.Navigator>
    <Tab.Screen name="Mercado" component={Mercado}  />
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>

)