import { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CarrinhoStackParamList } from "../navigation/types";
import { getUsuario } from "../services/useUser";
import FormCheckout from "../components/FormCheckout";
import { useTema } from "../context/TemaContext";

type CheckoutScreenProp = NativeStackScreenProps<CarrinhoStackParamList, "Checkout">;

export default function CheckoutScreen({ route }: CheckoutScreenProp) {
  const { total } = route.params;
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';

  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("Rua XV de Novembro, 123");
  const [cidade, setCidade] = useState("Rio de Janeiro");
  const [estado, setEstado] = useState("RJ");
  const [metodoPagamento, setMetodoPagamento] = useState("Cartão de Crédito");
  const [erro, setErro] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    getUsuario().then((usuario) => {
      setNome(`${usuario.firstName} ${usuario.lastName}`);
    });
  }, []);

  function confirmarPedido() {
    const camposVazios = [nome, rua, cidade, estado, metodoPagamento].some(
      (campo) => campo.trim() === ""
    );
    if (camposVazios) {
      setErro("Preencha todos os campos antes de confirmar.");
      return;
    }
    setErro("");
    setConfirmado(true);
  }

  return (
    <SafeAreaView style={[estilos.containerView, { backgroundColor: corFundo }]}>
      <ScrollView contentContainerStyle={estilos.scroll}>
        <Text style={estilos.titulo}>Checkout</Text>
        <Text style={[estilos.totalTexto, { color: corTexto }]}>Total: R$ {total.toFixed(2)}</Text>
        <FormCheckout
          nome={nome}
          setNome={setNome}
          rua={rua}
          setRua={setRua}
          cidade={cidade}
          setCidade={setCidade}
          estado={estado}
          setEstado={setEstado}
          metodoPagamento={metodoPagamento}
          setMetodoPagamento={setMetodoPagamento}
          onPress={confirmarPedido}
          erro={erro}
          confirmado={confirmado}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "darkslategray",
  },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  totalTexto: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: "whitesmoke",
    marginBottom: 20,
  },
});
