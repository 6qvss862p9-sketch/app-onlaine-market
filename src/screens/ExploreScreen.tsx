import { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ExploreScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Барлығы');

  const filtered = products.filter(
    (p) =>
      (category === 'Барлығы' || p.category === category) &&
      p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>Өнімдерді іздеу</Text>

      <View style={styles.search}>
        <Ionicons name="search" size={20} color={colors.dark} />
        <TextInput
          placeholder="Дүкеннен іздеу"
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <View style={styles.chips}>
        {categories.map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.chip, category === c && styles.chipActive]}
            onPress={() => setCategory(c)}
          >
            <Text style={[styles.chipText, category === c && { color: colors.white }]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>Ештеңе табылмады</Text>}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => navigation.navigate('ProductDetail', { id: item.id })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  search: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.light, borderRadius: 15, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: 'Montserrat_400Regular' },
  chips: { flexDirection: 'row', marginVertical: 18 },
  chip: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: colors.light, marginRight: 10 },
  chipActive: { backgroundColor: colors.primary },
  chipText: { color: colors.dark, fontFamily: 'Montserrat_600SemiBold', fontSize: 13 },
  empty: { textAlign: 'center', color: colors.grey, marginTop: 40, fontFamily: 'Montserrat_400Regular' },
});