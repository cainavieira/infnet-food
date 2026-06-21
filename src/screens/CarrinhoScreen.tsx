import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCarrinho } from "../context/CarrinhoContext";

export default function CarrinhoScreen() {
  const { itens } = useCarrinho();

  const total = itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  if (itens.length === 0) {
    return (
      <SafeAreaView style={styles.containerView}>
        <Text style={styles.textoVazio}>Seu carrinho está vazio.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containerView}>
      <Text style={styles.titulo}>Carrinho</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.containerItem}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nomeMeal}>{item.strMeal}</Text>
              <Text style={styles.quantidade}>Quantidade: {item.quantidade}</Text>
              <Text style={styles.preco}>R$ {item.preco?.toFixed(2)} / un.</Text>
            </View>
            <Text style={styles.subtotal}>
              R$ {(item.preco * item.quantidade)?.toFixed(2)}
            </Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.containerTotal}>
            <Text style={styles.textoTotal}>Total</Text>
            <Text style={styles.valorTotal}>R$ {total.toFixed(2)}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "darkslategray",
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
    textAlign: "center",
    marginBottom: 10,
  },
  textoVazio: {
    fontSize: 18,
    color: "whitesmoke",
    textAlign: "center",
    marginTop: 40,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "goldenrod",
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  nomeMeal: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "whitesmoke",
  },
  quantidade: {
    fontSize: 14,
    color: "goldenrod",
  },
  preco: {
    fontSize: 13,
    color: "whitesmoke",
  },
  subtotal: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
    minWidth: 70,
    textAlign: "right",
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "goldenrod",
    marginTop: 16,
    paddingTop: 12,
    paddingHorizontal: 4,
  },
  textoTotal: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: "whitesmoke",
  },
  valorTotal: {
    fontSize: 22,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
  },
});
