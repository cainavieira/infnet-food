import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTema } from "../context/TemaContext";

export default function PedidosRealizadosScreen() {
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';

  return (
    <SafeAreaView style={[styles.containerView, { backgroundColor: corFundo }]}>
      <Text style={[styles.mensagem, { color: corTexto }]}>Você não tem histórico de pedidos.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "darkslategray",
    justifyContent: "center",
    alignItems: "center",
  },
  mensagem: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "whitesmoke",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
