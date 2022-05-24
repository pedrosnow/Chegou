import React from 'react';
import { Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Buscar from '../screens/Buscar/index';
import Pedidos from '../screens/Meus Pedidos/index';
import Menu from '../screens/Menu/index';
import TabTops from '../stacks/TopTabs';
import Header from '../Components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
      <Tab.Screen name="Home" children={TabTops} options={{

        headerShown: true,
        headerShadowVisible: false,

        headerTitle: (props) => <Header {...props} />,

        tabBarIcon: ({ focused }) => (

          <View style={{ justifyContent: 'center', alignItems: 'center' }} >

            <AntDesign name="home" size={24} style={{
              color: focused ? "red" : "#000", marginBottom: 2
            }} />

            <Text style={{ color: focused ? "red" : "#000", fontSize: 10 }} >Home</Text>

          </View>


        ),
      }} />
      <Tab.Screen name="Buscar" component={Buscar} options={{

        tabBarIcon: ({ focused }) => (

          <View style={{ justifyContent: 'center', alignItems: 'center' }} >

            <AntDesign name="search1" size={24} style={{
              color: focused ? "red" : "#000", marginBottom: 2
            }} />


            <Text style={{ color: focused ? "red" : "#000", fontSize: 10 }} >Buscar</Text>

          </View>


        ),
      }} />
      <Tab.Screen name="Pedidos" component={Pedidos} options={{

        tabBarIcon: ({ focused }) => (

          <View style={{ justifyContent: 'center', alignItems: 'center' }} >

            <FontAwesome5 name="clipboard-list" size={24} color="black" style={{
              color: focused ? "red" : "#000", marginBottom: 2
            }} />


            <Text style={{ color: focused ? "red" : "#000", fontSize: 10 }} >Pedidos</Text>

          </View>


        ),
      }} />
      <Tab.Screen name="Menu" component={Menu} options={{

        tabBarIcon: ({ focused }) => (

          <View style={{ justifyContent: 'center', alignItems: 'center' }} >


            <Entypo name="menu" size={27} color="black" style={{
              color: focused ? "red" : "#000",
            }} />

            <Text style={{ color: focused ? "red" : "#000", fontSize: 10 }} >Menu</Text>

          </View>


        ),
      }} />
    </Tab.Navigator>

  );
}