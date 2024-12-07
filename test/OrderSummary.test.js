import React from 'react';
import { render } from '@testing-library/react-native';
import OrderSummary from '../components/OrderSummary';

describe('OrderSummary', () => {
  it('renders correctly with given props', () => {
    const props = {
      price: 100,
      deliveryFee: 50,
      discount: 10,
      total: 140,
    };

    const { getByText } = render(<OrderSummary {...props} />);

    expect(getByText('Price')).toBeTruthy();
    expect(getByText('₱ 100')).toBeTruthy();
    expect(getByText('Delivery Fee')).toBeTruthy();
    expect(getByText('₱ 50')).toBeTruthy();
    expect(getByText('Discount')).toBeTruthy();
    expect(getByText('₱ 10')).toBeTruthy();
    expect(getByText('Total Payment')).toBeTruthy();
    expect(getByText('₱ 140')).toBeTruthy();
  });
});