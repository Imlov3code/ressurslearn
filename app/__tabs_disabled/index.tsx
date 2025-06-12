import { View } from 'react-native';
import LoginScreen from '../../LoginScreen'; // ⬅️ 注意路径

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}
