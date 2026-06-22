import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
//Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import { useTema } from "../context/TemaContext";

type FormSimplesProps = {
  email: string;
  setEmail: (email: string) => void;
  senha: string;
  setSenha: (senha: string) => void;
  onPress: () => void;
  erroEmail: string;
  onBlurEmail: () => void;
};

export default function FormSimples({
  email,
  setEmail,
  senha,
  setSenha,
  onPress,
  erroEmail,
  onBlurEmail,
}: FormSimplesProps) {
  const { tema } = useTema();
  const escuro = tema === 'escuro';
  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Email: </Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Escreva email..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={email}
          onChangeText={setEmail}
          onBlur={ onBlurEmail}
        />
        {erroEmail ? <Text style={styles.error}>{erroEmail}</Text> : ""}
      </View>
      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <Text style={[styles.paragraph, { color: corTexto }]}>Senha: </Text>
        <TextInput
          style={[styles.input, { color: corTexto }]}
          placeholder="Escreva senha..."
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={senha}
          onChangeText={setSenha}
          keyboardType="number-pad"
        />
      </View>

      <View style={[styles.subContainer, { backgroundColor: corFundo }]}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.botaoT}
          activeOpacity={0.8}
        >
          <Text style={{ textAlign: "center" }}> Entrar </Text>
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
    fontWeight: 700,
    width: "80%",
    color:"whitesmoke"
  },
  input: {
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "goldenrod",
    padding: 10,
    fontWeight: 700,
    marginTop: 10,
  },
  botaoT: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: "goldenrod",
    borderRadius: 6,
    width: "80%",
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize:15
  },
});
