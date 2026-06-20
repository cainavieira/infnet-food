import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation/types";

type HomeProps = NativeStackScreenProps<StackParamList, "HomeScreen">;

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
