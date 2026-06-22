import { createContext, useContext, useState } from "react";
import * as Notifications from 'expo-notifications';
import type { Meals } from "../services/useMeals";

type ItemCarrinho = Meals & { quantidade: number };

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  adicionarItem: (meal: Meals) => void;
  removerItem: (idMeal: string) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(meal: Meals) {
    setItens((anterior) => {
      const atual = anterior.find((i) => i.idMeal === meal.idMeal);
      if (atual) {
        return anterior.map((i) =>
          i.idMeal === meal.idMeal ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }// se o item ta no carrinho, incrementa a quantidade
      if (anterior.length === 0) {
        Notifications.scheduleNotificationAsync({
          content: { title: "Carrinho", body: "Você tem um item no carrinho!" },
          trigger: null,//agora
        });
      }//Lança a notificaçao quando o user adiciona 1 item
      return [...anterior, { ...meal, quantidade: 1 }];
    });
  }

  function removerItem(idMeal: string) {
    setItens((anterior) => {
      const atual = anterior.find((i) => i.idMeal === idMeal);
      if (!atual) return anterior;
      if (atual.quantidade === 1) {
        return anterior.filter((i) => i.idMeal !== idMeal);
      }
      return anterior.map((i) =>
        i.idMeal === idMeal ? { ...i, quantidade: i.quantidade - 1 } : i
      );
    });
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
  //O provider da acesso passando o children assim.
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);
  if (!contexto) throw new Error("useCarrinho deve ser usado dentro do CarrinhoProvider");
  return contexto;
}
