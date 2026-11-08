import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
import { useCart } from '../context/CartContext';
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
  const { count } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        tabBarLabelStyle: { fontFamily: 'Montserrat_600SemiBold', fontSize: 11 },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={icons[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} options={{ title: 'Дүкен' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: 'Каталог' }} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Себет',
          tabBarBadge: count > 0 ? count : undefined,
          tabBarBadgeStyle: { backgroundColor: colors.primary },
        }}
      />
      <Tab.Screen name="Favourite" component={FavouriteScreen} options={{ title: 'Таңдаулы' }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'Профиль' }} />
    </Tab.Navigator>
  );
}