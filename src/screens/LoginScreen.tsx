import { Alert } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
//Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import type { StackParamList } from "../navigation/types";
import FormSimples from "../components/FormSimples";
type LoginProps = NativeStackScreenProps<StackParamList, "LoginScreen">;

export default function LoginScreen({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const errors = {
    email: "Por favor, entre um email valido.",
  }

  const onPress = () => {
    validateEmail(); //O estado atualiza tambem no onPress

    const emailValido = !email.includes("@");

    if (!email || !senha || emailValido) {
      Alert.alert("Preencha email e senha corretamente");
      return;
    }
    navigation.replace("HomeScreen");
  };

  const validateEmail = () => {
    setErroEmail(!email.includes("@") ? errors.email : "");
  };
  return (
    <FormSimples
      email={email}
      setEmail={setEmail} // nao valida
      senha={senha}
      setSenha={setSenha}
      onPress={onPress}
      erroEmail={erroEmail} 
      onBlurEmail={validateEmail} // só valida ao sair do campo
    />
  );
}
