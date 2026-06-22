import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useTema } from "../context/TemaContext";

type FormCheckoutProps = {
  nome: string;
  setNome: (valor: string) => void;
  rua: string;
  setRua: (valor: string) => void;
  cidade: string;
  setCidade: (valor: string) => void;
  estado: string;
  setEstado: (valor: string) => void;
  metodoPagamento: string;
  setMetodoPagamento: (valor: string) => void;
  onPress: () => void;
  erro: string;
  confirmado: boolean;
};

export default function FormCheckout({
  nome,
  setNome,
  rua,
  setRua,
  cidade,
  setCidade,
  estado,
  setEstado,
  metodoPagamento,
  setMetodoPagamento,
  onPress,
  erro,
  confirmado,
}: FormCheckoutProps) {
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Nome:</Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Seu nome completo..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Rua:</Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Rua e número..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={rua}
          onChangeText={setRua}
        />
      </View>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Cidade:</Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Cidade..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={cidade}
          onChangeText={setCidade}
        />
      </View>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Estado:</Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Estado..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={estado}
          onChangeText={setEstado}
        />
      </View>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Método de Pagamento:</Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Pix, Cartão de Crédito..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={metodoPagamento}
          onChangeText={setMetodoPagamento}
        />
      </View>
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <TouchableOpacity onPress={onPress} style={[styles.botaoT, confirmado && styles.btnConfirmado]} activeOpacity={0.8}>
          <Text style={{ textAlign: "center", fontFamily: "Lato_700Bold", color: "darkslategray" }}>
            {confirmado ? "Pedido Confirmado 👍" : "Confirmar Pedido"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkslategray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  subContainer: {
    backgroundColor: "darkslategray",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "700",
    width: "80%",
    color: "whitesmoke",
  },
  input: {
    width: 300,
    maxWidth:"80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "goldenrod",
    padding: 10,
    fontWeight: "700",
    marginTop: 10,
    textAlign:"center"
  },
  botaoT: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: "goldenrod",
    borderRadius: 6,
    width: "80%",
  },
  erro: {
    color: "red",
    marginTop: 5,
    fontSize: 15,
  },
  btnConfirmado: {
    backgroundColor: "green",
  },
});
