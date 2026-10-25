import { View, Text } from 'react-native';

export default function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontFamily: 'Montserrat_600SemiBold' }}>
        {route.params?.title ?? route.name}
      </Text>
    </View>
  );
}