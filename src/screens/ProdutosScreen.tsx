import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; //Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import type { StackParamList } from "../navigation/types";
import { getMeals } from "../services/useMeals";
import type { Meals } from "../services/useMeals";
import { useEffect, useState } from "react";

type ProdutoProps = NativeStackScreenProps<StackParamList, "Produtos">;

export default function ProdutosScreen({ route, navigation }: ProdutoProps) {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getMeals(categoria);
        setMeals(dados || []);
        console.log("dados recebidos:", dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando Categorias...</Text>
        <StatusBar style="auto" />
      </View>
    );
  const ItemList = ({ strMeal, strMealThumb, strCountry, idMeal }: Meals) => (
    <View style={styles.containerList}>
      <Pressable
        onPress={() =>
          navigation.navigate("ProdutoDetalhe", {
            item: {idMeal,strCountry,strMeal,strMealThumb},
          })
        }
      >
        <Image source={{ uri: strMealThumb }} style={styles.image} />
      </Pressable>
      <Text style={styles.paragraph}>{strMeal}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.containerHome}>
      <Text style={styles.tituloHome}>Selecione um Produto</Text>
      {meals.length > 0 ? (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <ItemList
              strMeal={item.strMeal}
              strMealThumb={item.strMealThumb}
              strCountry={item.strCountry}
              idMeal={item.idMeal}
            />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Lista nao carregada...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tituloHome: {
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Lato_700Bold",
    fontWeight: 700,
    textAlign: "center",
    color: "linear",
    marginBottom: 10,
  },
  containerHome: {
    backgroundColor: "darkslategray",
    flex: 1
  },
  containerList: {
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "goldenrod",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginLeft: 10,
  },
  image: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 150,
    height: 80,
  },
  paragraph: {
    fontFamily: "Lato_400Regular",
    fontSize: 22,
  },
});
