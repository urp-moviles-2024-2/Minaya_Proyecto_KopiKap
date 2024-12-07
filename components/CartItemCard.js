import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItemCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.subname}>{product.subname}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrease}>
          <Ionicons name="remove-circle-outline" size={24} color="#22A45D" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrease}>
          <Ionicons name="add-circle-outline" size={24} color="#22A45D" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    height: 100, // Half the height of the original ProductCard
    width: '100%', // Double the width of the original ProductCard
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subname: {
    fontSize: 16,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 8,
  },
});

export default CartItemCard;