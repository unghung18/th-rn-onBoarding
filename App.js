import React from 'react';

import Login from './components/Login';
import Home from './components/Home';
import onBoarding from './components/onBoarding';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onBoarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="onBoarding" component={onBoarding} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}