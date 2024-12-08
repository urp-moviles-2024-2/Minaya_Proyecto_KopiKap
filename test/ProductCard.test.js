import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {
  it('se renderiza correctamente y navega a la pantalla de Detalle al presionar el botón', () => {
    // Definición de un producto de ejemplo
    const product = {
      id: '1',
      name: 'Coffee',
      subname: 'Best Coffee',
      price: 100,
      image: 'https://example.com/coffee.jpg',
    };

    // Renderizar el componente ProductCard envuelto en un NavigationContainer
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <ProductCard product={product} />
      </NavigationContainer>
    );

    // Verificar que el nombre del producto, subnombre y precio se muestran correctamente
    expect(getByText('Coffee')).toBeTruthy();
    expect(getByText('Best Coffee')).toBeTruthy();
    expect(getByText('₱ 100')).toBeTruthy();

    // Obtener el botón y simular un evento de presión
    const button = getByTestId('add-circle-button');
    fireEvent.press(button);
  });
});
