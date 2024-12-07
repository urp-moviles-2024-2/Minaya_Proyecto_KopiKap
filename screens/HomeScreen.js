import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
//import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import HeaderComponent from "../components/Header";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from '../util/http';


const products = [
  { id: 1, name: 'Cappuccino', subname: ' Classic', price: 45.13, image: 'https://hanstrom.com/wp-content/uploads/2023/05/wu-yi-mk7zhx5lFbc-unsplash.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 2, name: 'Cappuccino', subname: ' Chiaro', price: 64.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphQCHtJWKiIj7hp3nd12_o2_jdT5SjEgfYg&s', description: 'A 150 cappuccino chiaro is a classic Italian coffee drink that consists of 150ml of liquid. It is characterized by a higher proportion of steamed milk compared to a traditional cappuccino, resulting in a milder flavor and creamier texture.'},
  { id: 3, name: 'Cappuccino', subname: ' Scuro', price: 75.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA4oz06jl4BMa4G9FYkf-iy9YjRxVOsboKw&s', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.' },
  { id: 4, name: 'Cappuccino', subname: ' with Chocolate', price: 75.50, image: 'https://infokofe.com/wp-content/uploads/2020/04/capuchino-con-chocolate.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.' },
  { id: 5, name: 'Macchiato', subname: ' Classic', price: 45.13, image: 'https://hanstrom.com/wp-content/uploads/2023/05/wu-yi-mk7zhx5lFbc-unsplash.jpg', description: 'A classic macchiato is a traditional espresso-based coffee drink, typically served in a small cup. It consists of a shot of espresso (about 30ml) topped with a small amount of steamed milk foam. In a 150ml version, the espresso is usually balanced with a bit more foam, creating a rich and bold coffee flavor with a smooth, creamy texture.' },
  { id: 6, name: 'Macchiato', subname: ' Chiaro', price: 64.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphQCHtJWKiIj7hp3nd12_o2_jdT5SjEgfYg&s', description: 'Is a 150ml espresso-based coffee drink. It features a shot of espresso "stained" with a small amount of steamed milk or milk foam, giving it a lighter flavor and texture compared to a traditional espresso. ' },
  { id: 7, name: 'Macchiato', subname: ' Scuro', price: 75.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA4oz06jl4BMa4G9FYkf-iy9YjRxVOsboKw&s', description: 'A "macchiato scuro" is a dark espresso-based coffee drink typically consisting of a shot of espresso with a small amount of steamed milk or milk foam. In this 150ml version, it maintains a stronger coffee flavor, with the milk serving to slightly soften the intense taste of the espresso.' },
  { id: 8, name: 'Macchiato', subname: ' with Chocolate', price: 75.50, image: 'https://infokofe.com/wp-content/uploads/2020/04/capuchino-con-chocolate.jpg', description: 'A 150ml macchiato with chocolate is a rich espresso-based drink that combines the bold flavor of espresso with a creamy layer of steamed milk. This version is enhanced with a touch of chocolate, either in syrup or melted form, adding a sweet, cocoa-infused layer to the drink.'},
  { id: 9, name: 'Latte', subname: ' Classic', price: 45.13, image: 'https://hanstrom.com/wp-content/uploads/2023/05/wu-yi-mk7zhx5lFbc-unsplash.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 10, name: 'Latte', subname: ' Chiaro', price: 64.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphQCHtJWKiIj7hp3nd12_o2_jdT5SjEgfYg&s', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 11, name: 'Latte', subname: ' Scuro', price: 75.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA4oz06jl4BMa4G9FYkf-iy9YjRxVOsboKw&s', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 12, name: 'Latte', subname: ' with Chocolate', price: 75.50, image: 'https://infokofe.com/wp-content/uploads/2020/04/capuchino-con-chocolate.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 13, name: 'Decaff.', subname: ' Classic', price: 45.13, image: 'https://hanstrom.com/wp-content/uploads/2023/05/wu-yi-mk7zhx5lFbc-unsplash.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 14, name: 'Decaff.', subname: ' Chiaro', price: 64.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphQCHtJWKiIj7hp3nd12_o2_jdT5SjEgfYg&s', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 15, name: 'Decaff.', subname: ' Scuro', price: 75.50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA4oz06jl4BMa4G9FYkf-iy9YjRxVOsboKw&s', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
  { id: 16, name: 'Decaff.', subname: ' with Chocolate', price: 75.50, image: 'https://infokofe.com/wp-content/uploads/2020/04/capuchino-con-chocolate.jpg', description: 'A 150ml cappuccino is a small coffee drink with equal parts espresso, steamed milk, and milk foam, offering a rich, creamy, and balanced flavor.'},
];

const HomeScreen = ({ route, navigation }) => {
 /* const email = route.params.email;
  const auth = getAuth();*/
  //const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Cappuccino'); // Estado para rastrear el tipo seleccionado
  /*const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsList = await fetchProducts();
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    loadProducts();
  }, []);*/

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

  const handleProductPress = (product) => {
    navigation.navigate("Detail", { item: product }); // Navega a Detail con los datos del producto
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
        {products
      .filter((product) => product.name === selectedType) // Filtra los productos por tipo seleccionado
      .map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onPress={() => handleProductPress(product)} // Navega a Detail
        />
      ))}
        </View>
      </ScrollView>


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