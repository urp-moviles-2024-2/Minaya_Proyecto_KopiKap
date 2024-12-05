import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.subname}>{product.subname}</Text>
      <Text style={styles.price}>₱ {product.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
        <Ionicons name="add-circle" size={24} color="#22A45D" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subname: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  price: {
    color: '#22A45D',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});

export default ProductCard;