import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './CalculadoraScreen.styles';


const CalculadoraScreen = () => {
  const [form, setForm] = useState({ distance: '', fuelType: '', fuelConsumption: '' });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Calculadora <Text style={{ color: '#68d674' }}>de Carbono</Text>
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Distancia recorrida:</Text>
          <TextInput
            keyboardType="numeric"
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, distance: value })}
            value={form.distance}
            placeholder="Ej. 80km"
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
};

export default CalculadoraScreen;
