import React, {useState, useContext} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons as Icon } from '@expo/vector-icons';
import TabLayout from '../components/layout';
import { FavoritesContext } from '../store/favourites-context';
import { CartContext } from '../store/cart-context';

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.id === product.id));

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    setIsFavorite(!isFavorite);
  };

  const handleBuyNowPress = () => {
    addToCart(product);
    navigation.navigate('Coffee');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
    <Icon name={isFavorite ? "heart" : "heart-outline"} size={24} color="#fff" />
  </TouchableOpacity>
        <View />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        {/* Imagen del Producto */}
        <Image style={styles.productImage} source={{ uri: product.image }} />

        {/* Detalles del Producto */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productSubname}>{product.subname}</Text>
          <Text style={styles.productDescription2}>Description</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productDescription}>Price</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>₱ {product.price}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={handleBuyNowPress}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  favoriteButton: {
    marginLeft: 10, // Optional, if you want to add some space between the title and icon
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will position items to the left and right ends
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#22A45D',
  },
  title: {
    flex: 1, // This will make the title take available space between the back button and the heart icon
    textAlign: 'center', // Center the title
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productImage: {
    width: '88%',
    height: 220,
    borderRadius: 20,
    margin: 22,
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  productSubname: {
    fontSize: 20,
    color: '#888',
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
    flex: 1
  },
  buyButton: {
    alignItems : 'center',
    backgroundColor: 'green',
    paddingVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '40%',
    flex:2
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;