import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { View, Text } from 'react-native';
import AppNavigator from "./src/navigation/AppNavigator";
import { CarrinhoProvider } from "./src/context/CarrinhoContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CarrinhoProvider>
  );
}

