import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  const { items, changeQty, removeItem, clearCart, total } = useCart();

  const handleOrder = () => {
    Alert.alert('Тапсырыс қабылданды', 'Рақмет! Тапсырысыңыз жолда.');
    clearCart();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>Менің себетім</Text>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ fontSize: 64 }}>🛒</Text>
          <Text style={styles.emptyText}>Себет бос</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(i) => i.product.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemEmoji}>{item.product.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.product.name}</Text>
                  <Text style={styles.unit}>{item.product.unit}</Text>
                  <View style={styles.qtyRow}>
                    <TouchableOpacity onPress={() => changeQty(item.product.id, -1)}>
                      <Ionicons name="remove-circle-outline" size={28} color={colors.grey} />
                    </TouchableOpacity>
                    <Text style={styles.qty}>{item.qty}</Text>
                    <TouchableOpacity onPress={() => changeQty(item.product.id, 1)}>
                      <Ionicons name="add-circle-outline" size={28} color={colors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.right}>
                  <TouchableOpacity onPress={() => removeItem(item.product.id)}>
                    <Ionicons name="close" size={22} color={colors.grey} />
                  </TouchableOpacity>
                  <Text style={styles.price}>{formatPrice(item.product.price * item.qty)}</Text>
                </View>
              </View>
            )}
          />

          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Барлығы</Text>
              <Text style={styles.totalValue}>{formatPrice(total)}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleOrder}>
              <Text style={styles.btnText}>Тапсырыс беру</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { fontSize: 18, color: colors.grey, marginTop: 10, fontFamily: 'Montserrat_600SemiBold' },
  item: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderColor: '#E2E2E2' },
  itemEmoji: { fontSize: 48, marginRight: 15 },
  name: { fontSize: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  unit: { color: colors.grey, fontSize: 13, fontFamily: 'Montserrat_400Regular' },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qty: { marginHorizontal: 12, fontSize: 16, fontFamily: 'Montserrat_600SemiBold' },
  right: { alignItems: 'flex-end', justifyContent: 'space-between', height: 70 },
  price: { fontSize: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  footer: { paddingVertical: 15 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontSize: 18, color: colors.grey, fontFamily: 'Montserrat_400Regular' },
  totalValue: { fontSize: 20, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, alignItems: 'center' },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Montserrat_600SemiBold' },
});