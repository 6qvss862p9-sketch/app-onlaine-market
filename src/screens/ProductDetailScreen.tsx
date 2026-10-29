import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function ProductDetailScreen({ route, navigation }: any) {
  const insets = useSafeAreaInsets();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === route.params.id);
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, qty);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color={colors.dark} />
        </TouchableOpacity>
        <Text style={styles.emoji}>{product.emoji}</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.unit}>{product.unit}</Text>

        <View style={styles.qtyRow}>
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => setQty((q) => Math.max(1, q - 1))}>
              <Ionicons name="remove" size={26} color={colors.grey} />
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity onPress={() => setQty((q) => q + 1)}>
              <Ionicons name="add" size={26} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{formatPrice(product.price * qty)}</Text>
        </View>

        <Text style={styles.sectionTitle}>Өнім сипаттамасы</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>Себетке қосу</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: { backgroundColor: colors.light, paddingHorizontal: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 },
  emoji: { fontSize: 120 },
  body: { padding: 25 },
  name: { fontSize: 24, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  unit: { color: colors.grey, marginTop: 4, fontFamily: 'Montserrat_400Regular' },
  qtyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 25 },
  qtyBox: { flexDirection: 'row', alignItems: 'center' },
  qty: { fontSize: 18, marginHorizontal: 20, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 14, paddingVertical: 8, paddingHorizontal: 16, fontFamily: 'Montserrat_600SemiBold' },
  price: { fontSize: 24, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  sectionTitle: { fontSize: 16, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  desc: { color: colors.grey, marginTop: 8, lineHeight: 22, fontFamily: 'Montserrat_400Regular' },
  footer: { paddingHorizontal: 25, paddingTop: 10 },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, alignItems: 'center' },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Montserrat_600SemiBold' },
});