// screens/Home.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const productos = [
  { id: '1', nombre: 'Hamburguesa QuickDish', precio: 18000, categoria: 'Plato fuerte' },
  { id: '2', nombre: 'Pizza Familiar', precio: 32000, categoria: 'Plato fuerte' },
  { id: '3', nombre: 'Limonada Natural', precio: 6000, categoria: 'Bebida' },
  { id: '4', nombre: 'Postre de la Casa', precio: 9000, categoria: 'Postre' },
];

export default function HomeScreen({ navigation, route }) {
  const rol = route?.params?.rol ?? 'Cliente';

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { producto: item })}
    >
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
        <Text style={styles.precio}>${item.precio.toLocaleString('es-CO')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sesión activa: {rol}</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity
        style={styles.botonPedido}
        onPress={() => navigation.navigate('Order')}
      >
        <Text style={styles.botonTexto}>Ver mi pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 13, color: '#777', marginBottom: 10 },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  info: { flexDirection: 'column' },
  nombre: { fontSize: 16, fontWeight: 'bold' },
  categoria: { fontSize: 12, color: '#888', marginVertical: 2 },
  precio: { fontSize: 14, color: '#d84315', fontWeight: '600' },
  botonPedido: { backgroundColor: '#2e7d32', padding: 14, borderRadius: 8 },
  botonTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
