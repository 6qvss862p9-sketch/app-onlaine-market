import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [loaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!loaded) return null;
  return <AppNavigator />;
}