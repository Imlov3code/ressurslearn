import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#eaeaf0" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaf0', // ⬅️ 背景色和原网页一致
    justifyContent: 'center',   // ⬅️ 垂直居中 LoginScreen（可选）
    alignItems: 'center',       // ⬅️ 水平居中 LoginScreen（可选）
  },
});
