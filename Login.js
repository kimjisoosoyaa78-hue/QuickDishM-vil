// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const usuariosSimulados = [
  { usuario: 'admin', contrasena: '1234', rol: 'Administrador' },
  { usuario: 'mesero1', contrasena: '1234', rol: 'Mesero' },
  { usuario: 'cliente1', contrasena: '1234', rol: 'Cliente' },
];

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const verificarLogin = () => {
    const encontrado = usuariosSimulados.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );

    if (encontrado) {
      Alert.alert('Bienvenido', `Ingreso correcto como ${encontrado.rol}`);
      navigation.navigate('Home', { rol: encontrado.rol });
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>QuickDish</Text>
      <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton} onPress={verificarLogin}>
        <Text style={styles.botonTexto}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  titulo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: '#d84315' },
  subtitulo: { fontSize: 14, textAlign: 'center', marginBottom: 24, color: '#555' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
  },
  boton: { backgroundColor: '#d84315', padding: 14, borderRadius: 8, marginTop: 10 },
  botonTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});