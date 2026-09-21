// screens/Order.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function OrderScreen({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (route?.params?.nuevoItem) {
      setItems((prev) => [...prev, route.params.nuevoItem]);
    }
  }, [route?.params?.nuevoItem]);

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  const enviarPedido = () => {
    if (items.length === 0) {
      Alert.alert('Pedido vacío', 'Agrega al menos un producto antes de continuar');
      return;
    }
    Alert.alert('Pedido enviado', `Total a pagar: $${total.toLocaleString('es-CO')}`);
    setItems([]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.vacio}>Aún no has agregado productos</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemNombre}>{item.cantidad} x {item.nombre}</Text>
              <Text style={styles.itemPrecio}>
                ${(item.precio * item.cantidad).toLocaleString('es-CO')}
              </Text>
            </View>
          )}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total.toLocaleString('es-CO')}</Text>
        <TouchableOpacity style={styles.boton} onPress={enviarPedido}>
          <Text style={styles.botonTexto}>Confirmar pedido y pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'space-between' },
  vacio: { textAlign: 'center', color: '#999', marginTop: 40 },
  item: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee',
  },
  itemNombre: { fontSize: 15 },
  itemPrecio: { fontSize: 15, fontWeight: '600' },
  footer: { borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 14 },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  boton: { backgroundColor: '#d84315', padding: 14, borderRadius: 8 },
  botonTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});