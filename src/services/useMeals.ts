const URL_CATEGORIAS = "https://www.themealdb.com/api/json/v1/1/categories.php";

const URL_MEALS = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: [];
};

const getCategorias = async () => {
  const response = await fetch(URL_CATEGORIAS);
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

export type Meals = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCountry: string;
};
const getMeals = async (category: string) => {
  const response = await fetch(`${URL_MEALS}${category}`);
  if (!response.ok) {
    throw new Error("Requisiçao feita na API nao teve sucesso\nStatus: ", {
      cause: response.status,
    });
  }
  const dados = await response.json();
  console.log(dados)
  return dados.meals.slice(0,10)
};
export { getMeals };
