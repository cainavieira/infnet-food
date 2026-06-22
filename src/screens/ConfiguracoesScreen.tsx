import { View, Text, Switch, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTema } from "../context/TemaContext";

export default function ConfiguracoesScreen() {
  const { tema, alternarTema } = useTema();
  const escuro = tema === 'escuro';

  const corFundo = escuro ? 'darkslategray' : 'whitesmoke';
  const corTexto = escuro ? 'whitesmoke' : 'darkslategray';
  const corTitulo = escuro ? 'goldenrod' : 'darkslategray';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={[styles.titulo, { color: corTitulo }]}>Configurações</Text>
      <View style={styles.paragraph}>
        <Text style={[styles.label, { color: corTexto }]}>Tema escuro</Text>
        <Switch
          value={escuro}
          onValueChange={alternarTema}
          trackColor={{ false: 'lightgray', true: 'goldenrod' }}
          thumbColor={escuro ? 'whitesmoke' : 'darkslategray'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontStyle: 'italic',
    fontFamily: 'Lato_700Bold',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  paragraph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
  },
});
