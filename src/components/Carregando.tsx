import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

export default function Carregando() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/DotLottie.json')}
        autoPlay
        loop
        style={styles.tamanho}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tamanho: {
    width: 150,
    height: 150,
  },
});
