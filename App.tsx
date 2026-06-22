import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppNavigator from "./src/navigation/AppNavigator";
import { CarrinhoProvider } from "./src/context/CarrinhoContext";
import { TemaProvider } from "./src/context/TemaContext";
import Carregando from "./src/components/Carregando";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),//Como exibe as notificaçoes
});

export default function App() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();//Pedir permissao antes de rodar para exibir
  }, []);

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