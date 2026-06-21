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

type ProdutoDetalheProp = NativeStackScreenProps<
  StackParamList,
  "ProdutoDetalhe"
>;

export default function ProdutoDetailsScreen({ route }: ProdutoDetalheProp) {
  const [quantidade, setQuantidade] = useState(0);

  function handleIncremento() {
    setQuantidade(quantidade + 1);
  }
  function handleDecremento() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const { item } = route.params;
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
          <Pressable style={styles.btn} onPress={handleIncremento}>
            <Text style={styles.textBtn}>
              Adicionar Carrinho {quantidade > 0 && `+ ${quantidade}`}
            </Text>
          </Pressable>
          {quantidade > 0 && (
            <Pressable style={styles.btn} onPress={handleDecremento}>
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
    fontSize: 34,
    color: "goldenrod",
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
    fontSize: 22,
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
