import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const InicioScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require( "../assets/Inicio.png")} style={styles.image} />
      <LinearGradient colors={['#0f956580', '#0c5940']} style={styles.container2} >
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={[styles.text, {color: "#ffffff", fontSize: 35, margin: 20, flex:1}]}>Elevate your coffee 
        experience at 
        Kopi Kap</Text>
      <Text style={{color:'#ffffff'}}>Where coffe meets comfort. </Text>
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#ffffff" }]}
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.text, {color: "#464646", fontSize: 16}]}>Get Started</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({ 
  button: {
    paddingVertical: 21,
    paddingHorizontal: 109,
    borderRadius: 16,
    position: "absolute",
    bottom: 90,
    width: 315,
    height: 62,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#060807',
  },
  container2: {
    flex: 2,
    height: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f956570',
  },
  image: {
    flex: 1,
    position: "absolute",
    width: 600,
    height: 900,
    right: -85,
    bottom: 190,
    transform: [{ rotate: "29deg" }], // Rota la imagen 45 grados
  },
});