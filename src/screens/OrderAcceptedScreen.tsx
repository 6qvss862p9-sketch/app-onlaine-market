import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { formatPrice } from '../utils/format';

export default function OrderAcceptedScreen({ route, navigation }: any) {
  const insets = useSafeAreaInsets();
  const total: number = route.params?.total ?? 0;

  const goShop = () =>
    navigation.reset({ index: 0, routes: [{ name: 'Main' }] });

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 20 }]}>
      <View style={styles.center}>
        <Text style={styles.emoji}>✅</Text>
        <Text style={styles.title}>Тапсырысыңыз{'\n'}қабылданды</Text>
        <Text style={styles.sub}>Азық-түлігіңіз жақын арада жеткізіледі.</Text>
        <Text style={styles.sum}>Сомасы: {formatPrice(total)}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={goShop}>
        <Text style={styles.btnText}>Дүкенге оралу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 25 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 90, marginBottom: 20 },
  title: { fontSize: 26, textAlign: 'center', color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  sub: { textAlign: 'center', color: colors.grey, marginTop: 15, lineHeight: 22, fontFamily: 'Montserrat_400Regular' },
  sum: { marginTop: 20, fontSize: 18, color: colors.primary, fontFamily: 'Montserrat_600SemiBold' },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, alignItems: 'center' },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Montserrat_600SemiBold' },
});