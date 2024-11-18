import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
//import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from '../components/layout';

const Stack = createStackNavigator();

const HomeScreen = ({ route, navigation }) => {
 /* const email = route.params.email;
  const auth = getAuth();*/
  //const navigation = useNavigation();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <View style={styles.container}>
      
      <Text>Welcome </Text>

      <Button title="Logout" onPress={logoutHandler} />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});