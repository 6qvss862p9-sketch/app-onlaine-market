import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';
import { formatPrice } from '../utils/format';

type Props = { item: Product; onPress: () => void };

export default function ProductCard({ item, onPress }: Props) {
  const { addToCart } = useCart();
  const { isFav, toggle } = useFavourites();
  const fav = isFav(item.id);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <TouchableOpacity style={styles.heart} onPress={() => toggle(item.id)}>
        <Ionicons name={fav ? 'heart' : 'heart-outline'} size={22} color={fav ? '#F3603F' : colors.grey} />
      </TouchableOpacity>
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
  );
}

const styles = StyleSheet.create({
  card: { width: '48%', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, padding: 14, marginBottom: 15 },
  heart: { position: 'absolute', top: 10, right: 10, zIndex: 1 },
  emoji: { fontSize: 64, textAlign: 'center', marginVertical: 10 },
  name: { fontSize: 15, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  unit: { color: colors.grey, fontSize: 13, fontFamily: 'Montserrat_400Regular' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  price: { fontSize: 16, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  add: { backgroundColor: colors.primary, width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
});