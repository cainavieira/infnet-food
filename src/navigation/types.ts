import type { Meals } from "../services/useMeals";
import type { Restaurante } from "../utils/restaurantesMock";

//Contrato sobre o que pode receber, undefined significa nao recebe nada, porem com categoria falo que precisa receber isso

export type StackRaizParamList = {
  LoginScreen: undefined;
  MainTabs: undefined;
};

export type MainTabsParamList = {
  Início: undefined;
  Carrinho: undefined;
  Perfil: undefined;
  Mapa: undefined;
};

export type PerfilStackParamList = {
  PerfilScreen: undefined;
  Pedidos: undefined;
  PedidosRealizados: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  Produtos: { categoria: string };
  ProdutoDetalhe: { item: Meals };
};

export type MapaStackParamList = {
  MapaScreen: undefined;
  RestauranteDetalhe: { restaurante: Restaurante };
};

export type CarrinhoStackParamList = {
  CarrinhoScreen: undefined;
  Checkout: { total: number };
};
