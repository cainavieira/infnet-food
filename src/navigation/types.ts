import type { Meals } from "../services/useMeals";

//Contrato sobre o que pode receber, undefined significa nao recebe nada, porem com categoria falo que precisa receber isso

export type StackRaizParamList = {
  LoginScreen: undefined;
  MainTabs: undefined;
};

export type MainTabsParamList = {
  Início: undefined;
  Carrinho: undefined;
  Perfil: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  Produtos: { categoria: string };
  ProdutoDetalhe: { item: Meals };
};
