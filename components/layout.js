import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}
export default function TabLayout() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#1bae76',
      tabBarShowLabel: false, // Oculta los nombres de todas las pestañas
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cafe-sharp' : 'cafe-outline'} color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="Favourites" component={FavouritesScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'heart-sharp' : 'heart-outline'} color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications-sharp' : 'notifications-outline'} color={color} size={24} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});