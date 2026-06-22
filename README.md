# InfnetFood

App de delivery feito com Expo + React Native durante o curso da Infnet. A ideia era construir algo parecido com o iFood, com telas reais, navegação completa e consumo de APIs externas.

Para ver rodando: https://snack.expo.dev/@cainavieira/f10fc9

---

## O que tem no projeto

- Login com validação
- Listagem de categorias e pratos vindos da API TheMealDB
- Carrinho de compras com contexto global
- Tela de checkout com formulário e pré-preenchimento via API (DummyJSON)
- Perfil do usuário buscado de uma API externa
- Mapa com restaurantes usando Leaflet via WebView
- Tema claro e escuro controlado por contexto
- Notificações locais ao adicionar o primeiro item no carrinho
- Animação de carregamento com Lottie

---

## Organização das pastas

```
src/
  screens/      -> uma tela por arquivo
  navigation/   -> navegadores e tipos de rotas
  services/     -> chamadas às APIs externas
  context/      -> carrinho e tema
  components/   -> componentes reutilizáveis
  utils/        -> dados mockados e funções auxiliares
assets/
  DotLottie.json  -> animação de loading
```

---

## Rodando localmente

```bash
npm install
npx expo start
```

Depois é só escanear o QR code com o app Expo Go no celular.

---

## Principais tecnologias

- Expo SDK 54
- React Native
- TypeScript
- expo-notifications

