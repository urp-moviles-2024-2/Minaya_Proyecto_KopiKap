import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
//import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import HeaderComponent from "../components/Header";
import ProductCard from "../components/ProductCard";
import TabLayout from '../components/layout';


const products = [
  { id: 1, name: 'Cappuccino Classic', price: 45.13, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Cappuccino Chiaro', price: 64.53, image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Cappuccino Scuro', price: 75.50, image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Cappuccino with Chocolate', price: 75.50, image: 'https://via.placeholder.com/100' },
];

const HomeScreen = ({ route, navigation }) => {
 /* const email = route.params.email;
  const auth = getAuth();*/
  //const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Cappuccino'); // Estado para rastrear el tipo seleccionado

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

  const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Kopi Kap" />
      <View style={styles.homecontainer}>
      <View style={styles.inputContainer}>
      <Ionicons 
        name="search" 
        color= "green" 
        size={24}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Search coffee"
      />
    </View>

    {/* Banner */}
    <View style={styles.banner}>
        <Image source={require('../assets/Free Delivery.png')} style={styles.bannerImage} />
    </View>

    {/* Coffee Types */}
    <View horizontal showsHorizontalScrollIndicator={false} style={styles.coffeeTypes}>
        {['Cappuccino', 'Macchiato', 'Latte', 'Decaff.'].map((type, index) => (
          <TouchableOpacity key={index} style={[
            styles.typeButton,
            selectedType === type && styles.selectedTypeButton, // Aplica estilos si está seleccionado
          ]} onPress={() => setSelectedType(type)} // Cambia el estado al seleccionar
          >
            <Text style={[
                styles.typeButtonText,
                selectedType === type && styles.selectedTypeButtonText,
              ]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Coffee List */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </View>
      </ScrollView>

      <Text>Welcome </Text>

      <Button title="Logout" onPress={logoutHandler} />
      <Text>Home Screen</Text>
    </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    width: 200,
    height: 40,
    borderColor: "#ffffff90",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffff90",
  },
  inputContainer: {
    flexDirection: 'row', // Coloca el ícono y el campo en línea
    alignItems: "center", // Alinea los elementos verticalmente
    justifyContent: 'space-between', // Distribuye los elementos a lo largo del contenedor
    width: 350,
    height: 50,
    borderColor: "#ffffff90",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 10,
  },
  banner: {
    marginVertical: 17,
    alignItems: 'center',
  },
  bannerImage: {
    width: 350,
    height: 170,
    borderRadius: 12,
  },
  coffeeTypes: {
    flexDirection: 'row', // Coloca el ícono y el campo en línea
    alignItems: "center", // Alinea los elementos verticalmente
    justifyContent: 'space-between', // Distribuye los elementos a lo largo del contenedor
    height: 50,
    marginBottom: 10,
    width: 360,
  },
  typeButton: {
    marginRight: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 10,
    height: 30,
  },
  selectedTypeButton: {
    backgroundColor: '#32b768', // Color para el botón seleccionado
  },
  selectedTypeButtonText: {
    color: '#fff', // Color de la letra del botón seleccionado
  },
  typeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'gray',
  },

  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});