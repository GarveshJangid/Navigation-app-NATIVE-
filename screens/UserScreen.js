import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const UserScreen = () => {
  const user = {
    id: 'user_123456',
    name: 'Garvesh Jangid',
    email: 'garveshjangid@example.com',
    imageUri: 'https://randomuser.me/api/portraits/men/48.jpg',
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'This feature is under development.');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.userId}>User ID: {user.id}</Text>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  userId: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

