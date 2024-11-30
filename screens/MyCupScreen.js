import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../components/Header';
import OrderSummary from '../components/OrderSummary';

const OrderScreen = ({ navigation }) => {
  const handlePlaceOrder = () => {
    console.log('Order Placed!');
  };

  const handleTabChange = (tab) => {
    if (tab === 'home') navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="My Cup" />
      <View style={styles.deliveryContainer}>
        <Text style={styles.addressTitle}>Delivery Address</Text>
        <Text style={styles.address}>2nd Door Emi, Carnation St., Sunflower Village, Brgy. Garden</Text>
        <View style={styles.addressButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
      <OrderSummary
        price={64.53}
        deliveryFee={10.00}
        discount={20.00}
        total={74.53}
      />
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  deliveryContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    marginVertical: 16,
    borderRadius: 8,
    elevation: 2,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  addressButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#22A45D',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#22A45D',
    fontWeight: 'bold',
  },
  addButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
  },
  addButtonText: {
    color: '#999',
  },
  placeOrderButton: {
    backgroundColor: '#22A45D',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderScreen;