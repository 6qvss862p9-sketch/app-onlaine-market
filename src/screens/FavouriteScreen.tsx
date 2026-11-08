import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { products } from '../data/products';
import { useFavourites } from '../context/FavouritesContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function FavouriteScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { ids } = useFavourites();
  const { addToCart } = useCart();

  const favProducts = products.filter((p) => ids.includes(p.id));

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>Таңдаулы</Text>

      {favProducts.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ fontSize: 64 }}>❤️</Text>
          <Text style={styles.emptyText}>Таңдаулы өнім жоқ</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={favProducts}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductCard item={item} onPress={() => navigation.navigate('ProductDetail', { id: item.id })} />
            )}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => favProducts.forEach((p) => addToCart(p))}
          >
            <Text style={styles.btnText}>Барлығын себетке қосу</Text>
          </TouchableOpacity>
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
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, alignItems: 'center', marginVertical: 15 },
  btnText: { color: colors.white, fontSize: 16, fontFamily: 'Montserrat_600SemiBold' },
});
