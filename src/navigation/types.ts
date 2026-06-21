import { Meals } from "../services/useMeals";

export type StackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  Produtos: {categoria:string};
  ProdutoDetalhe: {item: Meals}
};

//Contrato sobre o que pode receber, undefined singifica nao recebe nada, porem com categoria falo que precisa receber isso