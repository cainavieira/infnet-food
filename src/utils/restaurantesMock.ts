export type Restaurante = {
  restaurantID: number;
  restaurantName: string;
  address: string;
  type: string;
  parkingLot: boolean;
  lat: number;
  lng: number;
  pratoPrincipal: {
    nome: string;
    foto: string;
  };
};

const restaurantes: Restaurante[] = [
  {
    restaurantID: 1,
    restaurantName: "Confeitaria Colombo",
    address: "Rua Gonçalves Dias, 32 - Centro, Rio de Janeiro",
    type: "Confeitaria",
    parkingLot: false,
    lat: -22.9040,
    lng: -43.1764,
    pratoPrincipal: {
      nome: "Bolo de Rolo com Goiabada",
      foto: "https://www.themealdb.com/images/media/meals/wprutl1610153309.jpg",
    },
  },
  {
    restaurantID: 2,
    restaurantName: "Bar Luiz",
    address: "Rua da Carioca, 39 - Centro, Rio de Janeiro",
    type: "Petiscos Cariocas",
    parkingLot: false,
    lat: -22.9090,
    lng: -43.1760,
    pratoPrincipal: {
      nome: "Joelho de Porco à Alemã",
      foto: "https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
    },
  },
  {
    restaurantID: 3,
    restaurantName: "Churrascaria Gaúcha do Centro",
    address: "Campo de Santana, 180 - Centro, Rio de Janeiro",
    type: "Churrascaria",
    parkingLot: true,
    lat: -22.9072,
    lng: -43.1855,
    pratoPrincipal: {
      nome: "Picanha na Brasa",
      foto: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
    },
  },
  {
    restaurantID: 4,
    restaurantName: "Casa do Norte",
    address: "Rua Mem de Sá, 70 - Lapa, Rio de Janeiro",
    type: "Comida Nordestina",
    parkingLot: false,
    lat: -22.9170,
    lng: -43.1835,
    pratoPrincipal: {
      nome: "Baião de Dois com Carne de Sol",
      foto: "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
    },
  },
  {
    restaurantID: 5,
    restaurantName: "Taberna dos Arcos",
    address: "Rua Joaquim Silva, 11 - Lapa, Rio de Janeiro",
    type: "Frutos do Mar",
    parkingLot: false,
    lat: -22.9178,
    lng: -43.1810,
    pratoPrincipal: {
      nome: "Moqueca de Camarão",
      foto: "https://www.themealdb.com/images/media/meals/xqqbep1605908591.jpg",
    },
  },
  {
    restaurantID: 6,
    restaurantName: "Botequim da Praça",
    address: "Praça Tiradentes, 48 - Centro, Rio de Janeiro",
    type: "Boteco",
    parkingLot: false,
    lat: -22.9065,
    lng: -43.1795,
    pratoPrincipal: {
      nome: "Bolinho de Bacalhau",
      foto: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    },
  },
  {
    restaurantID: 7,
    restaurantName: "Cantina do Ouvidor",
    address: "Rua do Ouvidor, 26 - Centro, Rio de Janeiro",
    type: "Cantina Italiana",
    parkingLot: false,
    lat: -22.9038,
    lng: -43.1750,
    pratoPrincipal: {
      nome: "Ravióli ao Molho Sugo",
      foto: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    },
  },
  {
    restaurantID: 8,
    restaurantName: "Restaurante do Saara",
    address: "Rua Buenos Aires, 15 - Centro, Rio de Janeiro",
    type: "Comida Árabe",
    parkingLot: false,
    lat: -22.9055,
    lng: -43.1820,
    pratoPrincipal: {
      nome: "Esfiha de Carne Aberta",
      foto: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    },
  },
  {
    restaurantID: 9,
    restaurantName: "Mineiro Sabor da Terra",
    address: "Av. Rio Branco, 156 - Centro, Rio de Janeiro",
    type: "Comida Mineira",
    parkingLot: true,
    lat: -22.9020,
    lng: -43.1778,
    pratoPrincipal: {
      nome: "Feijão Tropeiro com Couve",
      foto: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    },
  },
  {
    restaurantID: 10,
    restaurantName: "Frutos do Mar Carioca",
    address: "Rua Visconde de Inhaúma, 55 - Centro, Rio de Janeiro",
    type: "Frutos do Mar",
    parkingLot: true,
    lat: -22.9010,
    lng: -43.1740,
    pratoPrincipal: {
      nome: "Polvo à Lagareiro",
      foto: "https://www.themealdb.com/images/media/meals/ml1ejj1637960946.jpg",
    },
  },
];

export { restaurantes };
