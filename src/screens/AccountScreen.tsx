import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';

const menu: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: 'receipt-outline', label: 'Тапсырыстар' },
  { icon: 'location-outline', label: 'Жеткізу мекенжайы' },
  { icon: 'card-outline', label: 'Төлем тәсілі' },
  { icon: 'notifications-outline', label: 'Хабарландырулар' },
  { icon: 'help-circle-outline', label: 'Көмек' },
];

export default function AccountScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { clearCart } = useCart();
  const { ids } = useFavourites();

  const logout = () => {
    clearCart();
    navigation.getParent()?.reset({ index: 0, routes: [{ name: 'SignIn' }] });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Б</Text>
        </View>
        <View>
          <Text style={styles.name}>Бекзат</Text>
          <Text style={styles.email}>bekzat@email.com</Text>
        </View>
      </View>

      <Text style={styles.stat}>Таңдаулы өнімдер: {ids.length}</Text>

      {menu.map((m) => (
        <TouchableOpacity key={m.label} style={styles.item}>
          <Ionicons name={m.icon} size={24} color={colors.dark} />
          <Text style={styles.itemText}>{m.label}</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.grey} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Ionicons name="log-out-outline" size={24} color={colors.primary} />
        <Text style={styles.logoutText}>Шығу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 20 },
  profile: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  avatarText: { color: colors.white, fontSize: 26, fontFamily: 'Montserrat_600SemiBold' },
  name: { fontSize: 20, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  email: { color: colors.grey, fontFamily: 'Montserrat_400Regular' },
  stat: { color: colors.grey, marginBottom: 10, fontFamily: 'Montserrat_400Regular' },
  item: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderTopWidth: 1, borderColor: '#E2E2E2' },
  itemText: { flex: 1, marginLeft: 15, fontSize: 16, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  logout: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.light, paddingVertical: 18, borderRadius: 19, marginTop: 30 },
  logoutText: { marginLeft: 10, fontSize: 16, color: colors.primary, fontFamily: 'Montserrat_600SemiBold' },
});
