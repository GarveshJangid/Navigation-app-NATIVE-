import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

// Sample data for shopping items
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: '$59.99',
    image: 'https://images.pexels.com/photos/3945668/pexels-photo-3945668.jpeg',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: '$99.99',
    image: 'https://images.pexels.com/photos/4378962/pexels-photo-4378962.jpeg',
    description: 'Stylish smartwatch with fitness tracking features.',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/12562635/pexels-photo-12562635.jpeg',
    description: 'Portable Bluetooth speaker with high-quality sound.',
  },
  {
    id: '4',
    name: 'Fitness Tracker',
    price: '$49.99',
    image: 'https://images.pexels.com/photos/4498483/pexels-photo-4498483.jpeg',
    description: 'Advanced fitness tracker with heart rate monitoring.',
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    price: '$19.99',
    image: 'https://images.pexels.com/photos/14363329/pexels-photo-14363329.jpeg',
    description: 'Ergonomic wireless mouse for comfortable use.',
  },
  {
    id: '6',
    name: 'USB-C Hub',
    price: '$39.99',
    image: 'https://images.pexels.com/photos/30708285/pexels-photo-30708285.jpeg',
    description: 'Multi-port USB-C hub for expanded connectivity.',
  },
  {
    id: '7',
    name: 'Portable Charger',
    price: '$24.99',
    image: 'https://images.pexels.com/photos/8576162/pexels-photo-8576162.jpeg',
    description: 'Compact portable charger for on-the-go charging.',
  },
  {
    id: '8',
    name: 'Noise Cancelling Earbuds',
    price: '$79.99',
    image: 'https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg',
    description: 'In-ear noise-cancelling earbuds for immersive sound.',
  },
  {
    id: '9',
    name: 'Smartphone Gimbal',
    price: '$89.99',
    image: 'https://images.pexels.com/photos/12562635/pexels-photo-12562635.jpeg',
    description: 'Stabilized gimbal for smooth smartphone videography.',
  },
  {
    id: '10',
    name: 'Action Camera',
    price: '$149.99',
    image: 'https://images.pexels.com/photos/12562635/pexels-photo-12562635.jpeg',
    description: 'Durable action camera for adventure enthusiasts.',
  },
  {
    id: '11',
    name: 'Gaming Keyboard',
    price: '$69.99',
    image: 'https://images.pexels.com/photos/12562635/pexels-photo-12562635.jpeg',
    description: 'Mechanical gaming keyboard with customizable RGB lighting.',
  },
  {
    id: '12',
    name: '4K Monitor',
    price: '$299.99',
    image: 'https://images.pexels.com/photos/12562635/pexels-photo-12562635.jpeg',
    description: 'Ultra-high-definition 4K monitor for crisp visuals.',
  },
];


const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default HomeScreen;