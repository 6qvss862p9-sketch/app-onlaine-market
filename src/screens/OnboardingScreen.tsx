import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.bottom}>
        <Text style={styles.title}>Welcome{'\n'}to our store</Text>
        <Text style={styles.desc}>Get your groceries in as fast as one hour</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.dark },
  imagePlaceholder: { flex: 1, backgroundColor: '#2B2A3A' },
  bottom: { padding: 25, paddingBottom: 50, alignItems: 'center' },
  title: { fontSize: 40, color: colors.white, textAlign: 'center', fontFamily: 'Poppins_600SemiBold' },
  desc: { color: '#FCFCFC99', marginVertical: 15, fontFamily: 'Poppins_400Regular' },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, width: '100%', alignItems: 'center' },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Poppins_600SemiBold' },
});