import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from './components/layout';
import LoginScreen from './screens/LoginScreen';
import InicioScreen from './screens/InicioScreen';
import { AuthProvider } from './store/auth-context';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabLayout" component={TabLayout} />
        </Stack.Navigator>
      </NavigationContainer>
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
