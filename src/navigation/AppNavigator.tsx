import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { StackRaizParamList, HomeStackParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProdutosScreen from "../screens/ProdutosScreen";
import ProdutoDetailsScreen from "../screens/ProdutoDetailsScreen";
import CarrinhoScreen from "../screens/CarrinhoScreen";

const StackRaiz = createNativeStackNavigator<StackRaizParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Produtos" component={ProdutosScreen} />
      <HomeStack.Screen name="ProdutoDetalhe" component={ProdutoDetailsScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}
//screens relacionada aos produtos e categoria que se organiza em pilha

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
//screens relacionadas a visao do aplicativo mesmo com as categorias que se organizam em tab pois dali pode-se ir para as categorias ou carrinho, como funciona com amazon ou ifood

export default function AppNavigator() {
  return (
    <StackRaiz.Navigator initialRouteName="LoginScreen">
      <StackRaiz.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <StackRaiz.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
    </StackRaiz.Navigator>
  );
}
