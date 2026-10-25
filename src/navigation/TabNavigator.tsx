import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Shop: 'storefront-outline',
  Explore: 'search-outline',
  Cart: 'cart-outline',
  Favourite: 'heart-outline',
  Account: 'person-outline',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        tabBarLabelStyle: { fontFamily: 'Poppins_600SemiBold', fontSize: 11 },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={icons[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={PlaceholderScreen} />
      <Tab.Screen name="Cart" component={PlaceholderScreen} />
      <Tab.Screen name="Favourite" component={PlaceholderScreen} />
      <Tab.Screen name="Account" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
}