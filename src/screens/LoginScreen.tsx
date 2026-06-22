import { Alert } from "react-native";
import { useState,  } from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
//Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import type { StackRaizParamList } from "../navigation/types";
import FormSimples from "../components/FormSimples";

type LoginProps = NativeStackScreenProps<StackRaizParamList, "LoginScreen"> & {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("admin@admin.com");
  const [senha, setSenha] = useState("admin123");
  const [erroEmail, setErroEmail] = useState("");

  const errors = {
    email: "Por favor, entre um email valido.",
  };

  const onPress = () => {
    validateEmail(); //O estado atualiza tambem no onPress

    const emailValido = !email.includes("@");

    if (!email || !senha || emailValido) {
      Alert.alert("Preencha email e senha corretamente");
      return;
    }

    onLogin();
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
