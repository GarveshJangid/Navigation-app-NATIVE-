import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const allItems = [
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
  { id: '13', name: '8K Monitor' },
];

const frequentItems = [
  { id: '1', name: 'Wireless Headphones' },
  { id: '2', name: 'Smart Watch' },
  { id: '3', name: 'Bluetooth Speaker' },
  
];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = allItems.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(newData);
    } else {
      setFilteredItems(allItems);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Products</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search items..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <Text style={styles.subHeader}>Frequent Items</Text>
      <FlatList
        data={frequentItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.frequentList}
      />
      <Text style={styles.subHeader}>All Items</Text>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.allItemsList}
      />
    </View>
  );
};

export default SearchScreen;

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
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  frequentList: {
    marginBottom: 16,
  },
  allItemsList: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
