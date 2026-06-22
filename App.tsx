import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppNavigator from "./src/navigation/AppNavigator";
import { CarrinhoProvider } from "./src/context/CarrinhoContext";
import Carregando from "./src/components/Carregando";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Carregando />;
  }

  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CarrinhoProvider>
  );
}

//A ideia é rodar o APP em docker