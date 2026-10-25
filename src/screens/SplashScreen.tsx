import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Onboarding'), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>nectar</Text>
      <Text style={styles.sub}>online groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 56, color: colors.white, fontFamily: 'Poppins_600SemiBold' },
  sub: { fontSize: 14, color: colors.white, letterSpacing: 4, fontFamily: 'Poppins_400Regular' },
});