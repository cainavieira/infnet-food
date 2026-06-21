import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PedidosRealizadosScreen() {
  return (
    <SafeAreaView style={styles.containerView}>
      <Text style={styles.mensagem}>Você não tem histórico de pedidos.</Text>
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
