import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput,} from 'react-native';
import styles from './LoginScreen.style';

export default function RegisterScreen({ navigation, setIsAuthenticated }) {
  const [form, setForm] = useState({ email: '', password: '', usuario: '' });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            turis<Text style={{ color: '#68d674' }}>teca</Text>
          </Text>
          <Text style={styles.subtitle}>Crea una cuenta</Text>
        </View>

        <View style={styles.usuario}>
          <Text style={styles.inputLabel}>Usuario:</Text>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={usuario => setForm({ ...form, usuario })}
            value={form.usuario}
            placeholder='turista'
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Correo:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Contraseña:</Text>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // Simulamos el registro y cambiamos a la pantalla principal
                setIsAuthenticated(true);
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Registrarse</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.formFooter}>
              ¿Ya tienes una cuenta?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Iniciar sesión</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

