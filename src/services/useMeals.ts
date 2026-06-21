const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: [];
};

const getCategorias = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Requisiçao feita na API nao teve sucesso\nStatus: ", {
      cause: response.status,
    });
  }
  const dados = await response.json();
  return dados.categories.sort((a: Category, b: Category) =>
    a.strCategory.localeCompare(b.strCategory),
  );
};
export { getCategorias };
