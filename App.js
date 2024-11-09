import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from './components/layout';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabLayout" component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
