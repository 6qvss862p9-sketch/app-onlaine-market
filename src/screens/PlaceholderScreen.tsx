import { View, Text } from 'react-native';

export default function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontFamily: 'Poppins_600SemiBold' }}>{route.name}</Text>
    </View>
  );
}