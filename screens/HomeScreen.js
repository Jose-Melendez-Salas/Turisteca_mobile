import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const posts = [
  {
    id: '1',
    user: 'Abigail',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    image: 'https://cdn1.yumping.com.mx/emp/fotos/0/4/5/2/tm_rios%20de%20la%20huasteca.jpg',
    description: 'El 80% de los nuevos usuarios inician...',
    likes: 21
  },
  {
    id: '2',
    user: 'turisteca',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    image: '',
    description: 'Te recomendamos ir al castillo',
    likes: 6
  },
  {
    id: '3',
    user: 'Carlos',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    image: 'https://www.viariogrande.com/cdn/shop/products/gal-meco-12.jpg?v=1654728397',
    description: 'Disfrutando del paraíso 🌴',
    likes: 45
  },
  {
    id: '4',
    user: 'Mariana',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
    image: 'https://www.enjoyingmexico.org/img/Huasteca2020/portada.png',
    description: 'Amanecer en las montañas 🏔️',
    likes: 33
  },
  {
    id: '5',
    user: 'Explorador',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
    image: 'https://elantitour.com/wp-content/uploads/2018/10/ruta-por-la-huasteca-potosina_portada-1.jpg',
    description: 'Un viaje que nunca olvidaré 🚀',
    likes: 99
  },
];

const PostCard = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <Text style={styles.username}>{item.user}</Text>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Ionicons name="ellipsis-horizontal" size={20} color="black" />
      </TouchableOpacity>
    </View>

    {item.image ? (
      <Image source={{ uri: item.image }} style={styles.postImage} />
    ) : null}

    <Text style={styles.description}>{item.description}</Text>
    
    <View style={styles.likesContainer}>
      <Ionicons name="heart-outline" size={20} color="black" />
      <Text style={styles.likesText}>{item.likes} likes</Text>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Agregamos el título arriba de la lista */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>turisteca</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,  
    backgroundColor: '#f0f0f0', 
  },
  titleContainer: {
    backgroundColor: '#f7ebf0', 
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#409223',
  },
  card: {
    backgroundColor: '#9DC68E',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 6,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 6,
    fontSize: 14,
  },
});
