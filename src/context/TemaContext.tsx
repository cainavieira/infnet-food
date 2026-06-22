import { createContext, useContext, useState } from "react";

type Tema = 'claro' | 'escuro';

type TemaContextType = {
  tema: Tema;
  alternarTema: () => void;
};

const TemaContext = createContext<TemaContextType | null>(null);

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>('escuro');

  function alternarTema() {
    setTema((anterior) => (anterior === 'escuro' ? 'claro' : 'escuro'));
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  const contexto = useContext(TemaContext);
  if (!contexto) throw new Error("useTema deve ser usado dentro do TemaProvider");
  return contexto;
}
