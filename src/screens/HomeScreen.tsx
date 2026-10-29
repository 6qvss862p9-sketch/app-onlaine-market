import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function HomeScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { addToCart } = useCart();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.location}>
        <Ionicons name="location-sharp" size={20} color={colors.dark} />
        <Text style={styles.locationText}>Алматы, Қазақстан</Text>
      </View>

      <View style={styles.search}>
        <Ionicons name="search" size={20} color={colors.dark} />
        <TextInput placeholder="Дүкеннен іздеу" style={styles.searchInput} />
      </View>

      <Text style={styles.section}>Айрықша ұсыныс</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.unit}>{item.unit}</Text>
            <View style={styles.row}>
              <Text style={styles.price}>{formatPrice(item.price)}</Text>
              <TouchableOpacity style={styles.add} onPress={() => addToCart(item)}>
                <Ionicons name="add" size={24} color={colors.white} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 20 },
  location: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  locationText: { fontSize: 18, marginLeft: 5, fontFamily: 'Montserrat_600SemiBold', color: colors.dark },
  search: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.light, borderRadius: 15, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: 'Montserrat_400Regular' },
  section: { fontSize: 22, marginVertical: 20, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  card: { width: '48%', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, padding: 14, marginBottom: 15 },
  emoji: { fontSize: 64, textAlign: 'center', marginVertical: 10 },
  name: { fontSize: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  unit: { color: colors.grey, fontSize: 13, fontFamily: 'Montserrat_400Regular' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  price: { fontSize: 16, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  add: { backgroundColor: colors.primary, width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
});