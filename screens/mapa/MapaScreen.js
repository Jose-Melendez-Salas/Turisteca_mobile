import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './MapaScreen.styles';

export default function MapaScreen() {  
  const [origin, setOrigin] = React.useState({
    latitude: 21.801660,
    longitude: -99.180401,
  });

  const [destination, setDestination] = React.useState({
    latitude: 21.806542,
    longitude: -99.183297,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.shee}>
          <View style={styles.input}>
            <Ionicons name="search" size={20} color="#6b7280" style={styles.icon} />
            <TextInput
              autoCorrect={false}
              placeholder="Huasteca, SlP"
              placeholderTextColor="#6b7280"
              style={styles.inputControl} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => alert('Ya llegaron las pizzas')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Restaurantes</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Si o no?')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Hoteles</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Traigo el zerote asi')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Actividades</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
          >
            <Marker coordinate={origin} />
            <Marker coordinate={destination} />
          </MapView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

