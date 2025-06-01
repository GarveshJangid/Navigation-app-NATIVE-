import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    Alert.alert('Cart', `${product.name} has been added to your cart.`);
  };

  const handleAddToWishlist = () => {
    Alert.alert('Wishlist', `${product.name} has been added to your wishlist.`);
  };

  const handleAddtobuy = () => {
    Alert.alert('buy', `${product.name} is not available to buy.`);
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Add to Cart" onPress={handleAddToCart} />
          <Button title="Add to Wishlist" onPress={handleAddToWishlist} />
          <Button title="Buy" onPress={handleAddtobuy} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 4,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductDetailScreen;
