import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { FavoritesContext } from '../store/favourites-context';
import ProductCard from '../components/ProductCard';
import Headers from '../components/Header';

const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Headers title="Favorites" />
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorite coffe</Text>
      ) : (
        <FlatList
          style={{ padding: 18 }}
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              style={styles.productsContainer}
              product={item}
            />
          )}
          numColumns={2} // Esto establece dos elementos por fila
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#22A45D',
  },
  noFavoritesText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoritesScreen;