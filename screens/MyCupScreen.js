import React, {useContext} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../components/Header';
import { CartContext } from '../store/cart-context';
import OrderSummary from '../components/OrderSummary';
import CartItemCard from '../components/CartItemCard';
import ProductCard from '../components/ProductCard';
const OrderScreen = ({ navigation }) => {
  const { cart } = useContext(CartContext);
  const handlePlaceOrder = () => {
    console.log('Order Placed!');
  };

  const handleTabChange = (tab) => {
    if (tab === 'home') navigation.navigate('HomeScreen');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 10;
  const totalPayment = totalPrice + deliveryFee ;

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
        </View>
      </View>
      <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItemCard
            product={item}
          />
        )}
      />
      </View>
      <OrderSummary
        price={totalPrice}
        deliveryFee={deliveryFee}
        total={totalPayment}
      />
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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