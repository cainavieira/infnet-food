import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PerfilStackParamList } from "../navigation/types";
import { useTema } from "../context/TemaContext";

type PedidosProps = NativeStackScreenProps<PerfilStackParamList, "Pedidos">;

export default function PedidosScreen({ navigation }: PedidosProps) {
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';

  return (
    <SafeAreaView style={[styles.containerView, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>Pedidos</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.getParent()?.navigate("Carrinho")}
      >
        <Text style={styles.textBtn}>Pedidos Atuais</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("PedidosRealizados")}
      >
        <Text style={styles.textBtn}>Pedidos Realizados</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "darkslategray",
    alignItems: "center",
    paddingTop: 40,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "goldenrod",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 6,
    width: 220,
  },
  textBtn: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
});
