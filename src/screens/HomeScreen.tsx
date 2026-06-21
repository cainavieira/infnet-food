import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; //Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import type { StackParamList } from "../navigation/types";

type HomeProps = NativeStackScreenProps<StackParamList, "HomeScreen">;
//NativeStackScreenProps é um tipo genérico que recebe dois parâmetros: o primeiro é a lista de parâmetros do stack navigator (StackParamList) e o segundo é o nome da tela para a qual queremos definir as props (HomeScreen). Isso nos permite acessar as props de navegação dentro do componente HomeScreen, como navigation.navigate para navegar para outras telas e a escolha do nativestack é por perfomance, ele é mais leve que o stack navigator tradicional, enquanto perde em customizaçao. 

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "khaki",
      }}
    >
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.btnText}>Ver Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
