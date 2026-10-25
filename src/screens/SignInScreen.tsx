import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кіру</Text>
      <Text style={styles.sub}>Email мен құпиясөзіңізді енгізіңіз</Text>

      <Text style={styles.label}>Электрондық пошта</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Құпиясөз</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Main')}>
        <Text style={styles.btnText}>Кіру</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>
          Аккаунтыңыз жоқ па? <Text style={{ color: colors.primary }}>Тіркелу</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 25, justifyContent: 'center' },
  title: { fontSize: 26, color: colors.dark, fontFamily: 'Montserrat_600SemiBold' },
  sub: { color: colors.grey, marginBottom: 30, fontFamily: 'Montserrat_400Regular' },
  label: { color: colors.grey, marginTop: 20, fontFamily: 'Montserrat_600SemiBold' },
  input: { borderBottomWidth: 1, borderColor: '#E2E2E2', paddingVertical: 10, fontSize: 16 },
  btn: { backgroundColor: colors.primary, paddingVertical: 20, borderRadius: 19, alignItems: 'center', marginTop: 40 },
  btnText: { color: colors.white, fontSize: 18, fontFamily: 'Montserrat_600SemiBold' },
  link: { textAlign: 'center', marginTop: 25, fontFamily: 'Montserrat_600SemiBold', color: colors.dark },
});