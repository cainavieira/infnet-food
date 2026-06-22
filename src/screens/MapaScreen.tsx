import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { restaurantes } from "../utils/restaurantesMock";
import type { MapaStackParamList } from "../navigation/types";

type MapaScreenProp = NativeStackScreenProps<MapaStackParamList, "MapaScreen">;

const dadosJson = JSON.stringify(restaurantes);// precisa ser json porque html apenas entende texto

const htmlMapa = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 100vw; height: 100vh; overflow: hidden; }
    #mapa { width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="mapa"></div>
  <script>
    const mapa = L.map('mapa').setView([-22.9068, -43.1729], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapa);

    const restaurantes = ${dadosJson};

    restaurantes.forEach(function (r) {
      L.marker([r.lat, r.lng])
        .addTo(mapa)
        .bindTooltip(r.restaurantName, {
          permanent: true,
          direction: 'top',
          offset: [0, -10],
        })
        .on('click', function () {
          window.ReactNativeWebView.postMessage(String(r.restaurantID));
        });
    });
  <\/script>
</body>
</html>
`;

export default function MapaScreen({ navigation }: MapaScreenProp) {
  function handleMensagem({ nativeEvent }: { nativeEvent: { data: string } }) {
    const id = Number(nativeEvent.data);
    const restaurante = restaurantes.find((r) => r.restaurantID === id);
    if (restaurante) navigation.navigate("RestauranteDetalhe", { restaurante });
  }

  return (
    <View style={estilos.container}>
      <WebView
        source={{ html: htmlMapa }}
        style={estilos.webview}
        javaScriptEnabled
        domStorageEnabled
        mixedContentMode="always"
        onMessage={handleMensagem}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
