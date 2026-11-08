import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();

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
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          />
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
});