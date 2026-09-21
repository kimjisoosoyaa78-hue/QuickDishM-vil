// screens/Detail.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { producto } = route.params;
  const [cantidad, setCantidad] = useState(1);

  const agregarAlPedido = () => {
    Alert.alert(
      'Producto agregado',
      `${cantidad} x ${producto.nombre} añadido al pedido`
    );
    navigation.navigate('Order', { nuevoItem: { ...producto, cantidad } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.categoria}>{producto.categoria}</Text>
      <Text style={styles.precio}>${producto.precio.toLocaleString('es-CO')}</Text>

      <View style={styles.selectorCantidad}>
        <TouchableOpacity
          style={styles.botonCantidad}
          onPress={() => setCantidad(Math.max(1, cantidad - 1))}
        >
          <Text style={styles.botonCantidadTexto}>-</Text>
        </TouchableOpacity>
        <Text style={styles.cantidad}>{cantidad}</Text>
        <TouchableOpacity
          style={styles.botonCantidad}
          onPress={() => setCantidad(cantidad + 1)}
        >
          <Text style={styles.botonCantidadTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.boton} onPress={agregarAlPedido}>
        <Text style={styles.botonTexto}>Agregar al pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  nombre: { fontSize: 24, fontWeight: 'bold' },
  categoria: { fontSize: 14, color: '#888', marginVertical: 6 },
  precio: { fontSize: 20, color: '#d84315', fontWeight: '600', marginBottom: 20 },
  selectorCantidad: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  botonCantidad: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#eee',
    justifyContent: 'center', alignItems: 'center',
  },
  botonCantidadTexto: { fontSize: 20, fontWeight: 'bold' },
  cantidad: { fontSize: 18, marginHorizontal: 20 },
  boton: { backgroundColor: '#2e7d32', padding: 14, borderRadius: 8 },
  botonTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});