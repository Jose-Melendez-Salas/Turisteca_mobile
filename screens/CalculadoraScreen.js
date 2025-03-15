import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CalculadoraScreen = () =>{
    const [form, setForm] = useState({ distance: '', fuelType: '', fuelConsumption: '' });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora <Text style={{ color: '#68d674' }}>de Carbono</Text></Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Distancia recorrida:</Text>
          <TextInput
            keyboardType="numeric"
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, distance: value })}
            value={form.distance}
            placeholder='Ej. 80km'
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Tipo de combustible:</Text>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowText}>Ej. Gasolina</Text>
            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Consumo de combustible:</Text>
          <TextInput
            keyboardType="numeric"
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, fuelConsumption: value })}
            value={form.fuelConsumption}
            placeholder="Litros/100km"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={() => alert('No pos mucho')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Calcular</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D2A32',
    textAlign: "center",
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  rowText: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: 'bold',
  },
  formAction: {
    marginTop: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CalculadoraScreen;
    