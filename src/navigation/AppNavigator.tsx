import type { StackParamList } from "../navigation/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProdutosScreen from "../screens/ProdutosScreen";
import ProdutoDetailsScreen from "../screens/ProdutoDetailsScreen";
import type { Category } from "../services/useMeals";


const Stack = createNativeStackNavigator<StackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Produtos" component={ProdutosScreen} />
      <Stack.Screen name="ProdutoDetalhe" component={ProdutoDetailsScreen} />


    </Stack.Navigator>
  );
}
