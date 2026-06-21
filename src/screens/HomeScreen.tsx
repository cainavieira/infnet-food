import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; //Tipo exportado pela biblioteca de navegação para definir as props de uma tela em um stack navigator.
import type { StackParamList } from "../navigation/types";
import { getCategorias } from "../services/useMeals";
import type { Category } from "../services/useMeals";
import { useEffect, useState } from "react";

type HomeProps = NativeStackScreenProps<StackParamList, "HomeScreen">;
//NativeStackScreenProps é um tipo genérico que recebe dois parâmetros: o primeiro é a lista de parâmetros do stack navigator (StackParamList) e o segundo é o nome da tela para a qual queremos definir as props (HomeScreen). Isso nos permite acessar as props de navegação dentro do componente HomeScreen, como navigation.navigate para navegar para outras telas e a escolha do nativestack é por perfomance, ele é mais leve que o stack navigator tradicional, enquanto perde em customizaçao.

export default function HomeScreen() {
  const [categorias, setCategorias] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getCategorias();
        setCategorias(dados || []);
        console.log("dados recebidos:", dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando Categorias...</Text>
        <StatusBar style="auto" />
      </View>
    );
  const ItemList = ({
    strCategory,
    strCategoryThumb,
  }: Category) => (
    <View style={styles.containerList}>
      <Image source={{ uri: strCategoryThumb }} style={styles.image} />
      <Text style={styles.paragraph}>{strCategory}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.containerHome}>
      <Text style={styles.tituloHome}>Escolha por Categoria</Text>
      {categorias.length > 0 ? (
        <FlatList
          data={categorias}
          keyExtractor={(item) => item.idCategory}
          renderItem={({ item }) => (
            <ItemList
              strCategory={item.strCategory}
              strCategoryThumb={item.strCategoryThumb}
              strCategoryDescription={item.strCategoryDescription}
              idCategory={item.idCategory}
            />
          )}
          numColumns={2}
           columnWrapperStyle={{ gap: 20 }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Lista nao carregada...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tituloHome:{
    fontSize:24,
    fontStyle:"italic",
    fontFamily: "Lato_700Bold",
    fontWeight:700,
    textAlign:"center",
    color:"linear",
    marginBottom: 10
  },
  containerHome:{
    backgroundColor: "darkslategray"
  },
  containerList: {
    borderRadius: 10,
    borderTopWidth: 5,
    borderColor: "goldenrod",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    marginLeft:10
  },
  image: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 150,
    height: 80,
  },
  paragraph: {
    fontFamily: "Lato_400Regular",
    fontSize:22
  },
});
