import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PerfilStackParamList } from "../navigation/types";
import { getUsuario } from "../services/useUser";
import type { User } from "../services/useUser";

type PerfilProps = NativeStackScreenProps<PerfilStackParamList, "PerfilScreen">;

export default function PerfilScreen({ navigation }: PerfilProps) {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getUsuario();
        setUsuario(dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerView}>
      <Text style={styles.titulo}>Perfil</Text>
      <Image source={{ uri: usuario?.image }} style={styles.foto} />
      <Text style={styles.nome}>
        {usuario?.firstName} {usuario?.lastName}
      </Text>
      <Text style={styles.info}>{usuario?.email}</Text>
      <Text style={styles.info}>{usuario?.age} anos</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Pedidos")}>
        <Text style={styles.textBtn}>Pedidos</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "darkslategray",
    alignItems: "center",
    paddingTop: 30,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "goldenrod",
    marginBottom: 10,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "goldenrod",
  },
  nome: {
    fontFamily: "Lato_700Bold",
    fontSize: 22,
    color: "whitesmoke",
    marginTop: 8,
  },
  info: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    color: "whitesmoke",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "goldenrod",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 6,
  },
  textBtn: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
});
