<<<<<<< HEAD
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

=======
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
>>>>>>> 023bdc03c6272315c143c60f9b7281eed75065aa
)