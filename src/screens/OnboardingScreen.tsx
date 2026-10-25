import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.bottom}>
        <Text style={styles.title}>Дүкенімізге{'\n'}қош келдіңіз</Text>
        <Text style={styles.desc}>Азық-түлікті небәрі бір сағатта алыңыз</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.btnText}>Бастау</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.dark },
  imagePlaceholder: { flex: 1, backgroundColor: '#2B2A3A' },
  bottom: { padding: 25, paddingBottom: 50, alignItems: 'center' },
  title: { fontSize: 34, color: colors.white, textAlign: 'center', fontFamily: 'Montserrat_600SemiBold' },
  desc: { color: '#FCFCFC99', marginVertical: 15, textAlign: 'center', fontFamily: 'Montserrat_400Regular' },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, width: '100%', alignItems: 'center' },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Montserrat_600SemiBold' },
});