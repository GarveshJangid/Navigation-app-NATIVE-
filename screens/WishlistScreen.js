import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const initialFavorites = [
  { id: '1', name: 'Wireless Headphones' },
  { id: '2', name: 'Smart Watch' },
  { id: '3', name: 'Bluetooth Speaker' },
  { id: '4', name: 'Fitness Tracker' },
  { id: '5', name: 'Wireless Mouse' },
  { id: '6', name: 'USB-C Hub' },
  { id: '7', name: 'Portable Charger' },
  { id: '8', name: 'Noise Cancelling Earbuds' },
  { id: '9', name: 'Smartphone Gimbal' },
  { id: '10', name: 'Action Camera' },
  { id: '11', name: 'Gaming Keyboard' },
  { id: '12', name: '4K Monitor' },
  // Add more favorite items as needed
];

const WishlistScreen = () => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wishlist</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 1.41, 
  },
  itemText: {
    fontSize: 16,
  },
});
