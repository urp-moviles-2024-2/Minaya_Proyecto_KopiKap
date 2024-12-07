import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from './components/layout';
import LoginScreen from './screens/LoginScreen';
import InicioScreen from './screens/InicioScreen';
import { AuthProvider } from './store/auth-context';
import Detail from './screens/DetailScreen';
import { useEffect } from 'react';
import FavoritesScreen from './screens/FavouritesScreen';
import { FavoritesProvider } from './store/favourites-context';
import { CartProvider } from './store/cart-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <FavoritesProvider>
      <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabLayout" component={TabLayout} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
      </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
