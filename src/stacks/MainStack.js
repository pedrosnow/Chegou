import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

import Login from '../screens/Login/index';
import Preload from '../screens/Preload/index';
import Home from '../screens/Home/index';
import TabNavigation from '../stacks/TabNavigation';
import Produtos from '../screens/Produtos/index';

export default () => (
    <stack.Navigator initialRouteName='Produtos' screenOptions={{ headerShown: false, presentation: 'modal' }}>
        <stack.Screen name='Preload' component={Preload} />
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Produtos' component={Produtos} options={{ animation: 'slide_from_right' }} />
        <stack.Screen name='TabNavigation' component={TabNavigation} />

    </stack.Navigator>
)