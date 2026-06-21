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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "../navigation/types";
import { useCarrinho } from "../context/CarrinhoContext";

type ProdutoDetalheProp = NativeStackScreenProps<
  HomeStackParamList,
  "ProdutoDetalhe"
>;

export default function ProdutoDetailsScreen({ route }: ProdutoDetalheProp) {
  const { itens, adicionarItem, removerItem } = useCarrinho();
  const { item } = route.params;
  const itemNoCarrinho = itens.find((i) => i.idMeal === item.idMeal);
  const quantidade = itemNoCarrinho?.quantidade ?? 0;
  return (
    <SafeAreaView style={styles.containerView}>
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.paragraph}>{item.strMeal}</Text>
      <View style={styles.containerDescricao}>
        <Text style={styles.tituloDescricao}>Descrição</Text>
        <Text style={styles.paragraph}>
          Descubra os sabores autênticos de {item.strMeal}, um prato tradicional
          da culinária {item.strCountry}. Cada detalhe foi pensado para trazer
          uma experiência única ao seu paladar, celebrando a riqueza e a
          diversidade da gastronomia mundial.
        </Text>
        <View style={{ flexDirection: "row", gap:20 }}>
          <Pressable style={styles.btn} onPress={() => adicionarItem(item)}>
            <Text style={styles.textBtn}>
              Adicionar Carrinho {quantidade > 0 && `+ ${quantidade}`}
            </Text>
          </Pressable>
          {quantidade > 0 && (
            <Pressable style={styles.btn} onPress={() => removerItem(item.idMeal)}>
              <Text style={styles.textBtn}>Remover Carrinho</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "darkslategray",
  },
  containerDescricao: {
    flex: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "darkslategray",
  },
  tituloDescricao: {
    fontSize: 30,
    color: "goldenrod",
    marginTop:20
  },
  image: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 300,
    height: 200,
    objectFit: "fill",
  },
  paragraph: {
    fontFamily: "Lato_400Regular",
    fontSize: 20,
    color: "whitesmoke",
    textAlign: "center",
    marginHorizontal: 10,
  },
  btn: {

    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: "goldenrod",
    borderRadius: 6,
    width: 100,
  },
  textBtn:{
    textAlign:"center",

  }
});
