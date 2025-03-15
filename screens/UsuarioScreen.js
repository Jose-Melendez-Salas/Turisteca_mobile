import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Switch, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const UsuarioScreen = () =>{
    
    const [form, setForm] = useState({
        darkMode: false,
        pushNotifications: false,
      }); 

    return (
         <SafeAreaView style={{ flex: 1, backgroundColor: form.darkMode ? '#222' : '#fff' }}>
      <View style={styles.profile}>
        <TouchableOpacity>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{ uri: 'https://rvideos2.memedroid.com/videos/UPLOADED214/6627df63b6b96.webp' }}
              style={styles.profileAvatar}
            />
            <TouchableOpacity>
              <View style={styles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.profileName}>turisteca</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ajustes</Text>

        <View style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
            <FeatherIcon color="#fff" name="moon" size={20} />
          </View>
          <Text style={styles.rowLabel}>Modo noche</Text>
          <View style={styles.rowSpacer} />
          <Switch
            onValueChange={(darkMode) => setForm({ ...form, darkMode })}
            value={form.darkMode}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
            <FeatherIcon color="#fff" name="bell" size={20} />
          </View>
          <Text style={styles.rowLabel}>Notificaciones</Text>
          <View style={styles.rowSpacer} />
          <Switch
            onValueChange={(pushNotifications) => setForm({ ...form, pushNotifications })}
            value={form.pushNotifications}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ayuda y soporte tecnico.</Text>

        <TouchableOpacity style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
            <FeatherIcon color="#fff" name="flag" size={20} />
          </View>
          <Text style={styles.rowLabel}>Reportar errores</Text>
          <View style={styles.rowSpacer} />
          <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
            <FeatherIcon color="#fff" name="mail" size={20} />
          </View>
          <Text style={styles.rowLabel}>Contáctanos</Text>
          <View style={styles.rowSpacer} />
          <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
            <FeatherIcon color="#fff" name="star" size={20} />
          </View>
          <Text style={styles.rowLabel}>Califica la app</Text>
          <View style={styles.rowSpacer} />
          <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profile: {
    padding: 40,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default UsuarioScreen;
    