// App.js
// Módulo de Navegación - QuickDish Móvil
// Requiere: @react-navigation/native, @react-navigation/native-stack

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import OrderScreen from './screens/Order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'QuickDish - Iniciar Sesión' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Menú QuickDish' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalle del Producto' }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ title: 'Mi Pedido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

