import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
//import SettingsScreen from '../screens/SettingsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import OrderScreen from '../screens/MyCupScreen';
import { AuthContext } from '../store/auth-context';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false, // Hide the labels of all tabs
        tabBarStyle: {
          position: 'absolute', // Asegura que la barra se pueda mover
          bottom: 30, // Ajusta la distancia desde abajo
          left: 20,   // Opcional, para personalizar los bordes
          right: 20,  // Opcional, para personalizar los bordes
          borderRadius: 15, // Redondea los bordes de la barras
          height: 65, // Ajusta la altura de la barra
          
        },
        tabBarActiveBackgroundColor: '#1bae76',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-outline' : 'home-outline'} color={focused ? color : 'black'} size={24} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Coffee"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <SimpleLineIcons name={focused ? 'cup' : 'cup'} color={focused ? color : 'black'} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'heart-outline' : 'heart-outline'} color={focused ? color : 'black'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favour"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            
            <Ionicons name={focused ? 'notifications-outline' : 'notifications-outline'} color={focused ? color : 'black'} size={24}
            style={{
              backgroundColor: focused ? '#1bae76' : 'transparent', // Fondo verde en el ícono activo
              borderRadius: 10, // Redondea las esquinas del ícono
              padding: 5, // Agrega un pequeño padding al ícono
            }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'black',
  },
});