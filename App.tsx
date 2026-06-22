import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppNavigator from "./src/navigation/AppNavigator";
import { CarrinhoProvider } from "./src/context/CarrinhoContext";
import { TemaProvider } from "./src/context/TemaContext";
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
    <TemaProvider>
      <CarrinhoProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </CarrinhoProvider>
    </TemaProvider>
  );
}

//A ideia é rodar o APP em docker