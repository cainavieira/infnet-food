import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { MapaStackParamList } from "../navigation/types";
import { useTema } from "../context/TemaContext";

type RestauranteDetalheProp = NativeStackScreenProps<
  MapaStackParamList,
  "RestauranteDetalhe"
>;

export default function RestauranteDetailsScreen({ route }: RestauranteDetalheProp) {
  const { restaurante } = route.params;
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';

  return (
    <SafeAreaView style={[estilos.containerView, { backgroundColor: corFundo }]}>
      <Image source={{ uri: restaurante.pratoPrincipal.foto }} style={estilos.image} />
      <Text style={[estilos.paragraph, { color: corTexto }]}>{restaurante.restaurantName}</Text>
      <View style={[estilos.containerDescricao, { backgroundColor: corFundo }]}>
        <Text style={estilos.tituloDescricao}>Informações</Text>
        <Text style={[estilos.paragraph, { color: corTexto }]}>{restaurante.address}</Text>
        <Text style={[estilos.paragraph, { color: corTexto }]}>{restaurante.type}</Text>
        <Text style={[estilos.paragraph, { color: corTexto }]}>
          Estacionamento: {restaurante.parkingLot ? "Sim" : "Não"}
        </Text>
        <Text style={estilos.tituloDescricao}>Prato do Dia</Text>
        <Text style={[estilos.paragraph, { color: corTexto }]}>{restaurante.pratoPrincipal.nome}</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  containerView: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "darkslategray",
  },
  containerDescricao: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "darkslategray",
  },
  tituloDescricao: {
    fontSize: 30,
    color: "goldenrod",
    marginTop: 20,
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
});
