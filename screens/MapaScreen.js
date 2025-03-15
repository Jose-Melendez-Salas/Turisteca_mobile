import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons'; 

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

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  shee: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 180,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 19,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    gap: 2,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  inputControl: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
  },
});