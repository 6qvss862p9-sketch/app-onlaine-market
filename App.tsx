import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import AppNavigator from './src/navigation/AppNavigator';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  const [loaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold });
  if (!loaded) return null;
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}