import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ price, deliveryFee, discount, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price</Text>
      <Text style={styles.value}>₱ {price}</Text>
      <Text style={styles.label}>Delivery Fee</Text>
      <Text style={styles.value}>₱ {deliveryFee}</Text>
      <Text style={styles.label}>Discount</Text>
      <Text style={styles.value}>₱ {discount}</Text>
      <Text style={styles.totalLabel}>Total Payment</Text>
      <Text style={styles.totalValue}>₱ {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22A45D',
  },
});

export default OrderSummary;