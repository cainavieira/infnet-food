const URL_USUARIO = "https://dummyjson.com/users/1";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
};

const getUsuario = async () => {
  const response = await fetch(URL_USUARIO);
  if (!response.ok) {
    throw new Error("Requisiçao feita na API nao teve sucesso\nStatus: ", {
      cause: response.status,
    });
  }
  const dados = await response.json();
  return dados as User;
};
export { getUsuario };
