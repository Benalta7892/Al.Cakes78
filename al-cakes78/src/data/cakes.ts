import type { Cake } from "@/types/cake";

export const CAKES: Cake[] = [
  {
    id: 1,
    name: "Dahlia",
    slug: "dahlia",
    images: [
      "/images/cake-face1.svg",
      "/images/slide1.jpg",
      "/images/cake-face1.svg",
      "/images/cake-face1.svg",
    ],
    description:
      "Un délicieux gâteau au chocolat riche et moelleux. Parfait pour les amateurs de chocolat ! N'oubliez pas de l'accompagner d'une boule de glace à la vanille.",
    ingredients: [
      "Génoise à la vanille",
      "Mousse légère aux fruits rouges",
      "Glaçage miroir",
      "Décor en chocolat blanc",
      "Fruits frais",
      "Fleurs comestibles",
    ],
    molds: [
      { size: "6-8p", price: 25 },
      { size: "8-10p", price: 30 },
      { size: "10-12p", price: 35 },
    ],
    price: 25.0,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Camélia",
    slug: "camélia",
    images: [
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
    ],
    description:
      "Un gâteau à la vanille léger et savoureux. Idéal pour les célébrations ! Accompagné d'un glaçage crémeux, il ravira vos invités.",
    ingredients: [
      "Génoise à la vanille",
      "Crème au beurre à la vanille",
      "Décor en chocolat blanc",
      "Fruits frais",
      "Fleurs comestibles",
      "Pépites de chocolat",
    ],
    molds: [
      { size: "6-8p", price: 20 },
      { size: "8-10p", price: 25 },
      { size: "10-12p", price: 30 },
    ],
    price: 20.0,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Iris",
    slug: "iris",
    images: [
      "/images/cake-face3.svg",
      "/images/cake-face3.svg",
      "/images/cake-face3.svg",
      "/images/cake-face3.svg",
    ],
    description:
      "Un gâteau frais garni de fruits de saison. Un délice estival ! Avec sa texture légère et ses saveurs fruitées, il est parfait pour les journées chaudes.",
    ingredients: [
      "Génoise légère",
      "Crème chantilly",
      "Fruits de saison",
      "Glaçage au chocolat blanc",
      "Fleurs comestibles",
      "Pépites de chocolat",
    ],
    molds: [
      { size: "6-8p", price: 22 },
      { size: "8-10p", price: 27 },
      { size: "10-12p", price: 32 },
    ],
    price: 30.0,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Pivoine",
    slug: "pivoine",
    images: [
      "/images/cake-face4.svg",
      "/images/cake-face1.svg",
      "/images/cake-face1.svg",
      "/images/cake-face1.svg",
    ],
    description:
      "Un gâteau Red Velvet avec un glaçage crémeux. Un classique américain ! Sa couleur rouge vif et son goût unique en font un choix populaire pour les anniversaires et les occasions spéciales.",
    ingredients: [
      "Génoise Red Velvet",
      "Crème au fromage",
      "Glaçage au chocolat blanc",
      "Fruits frais",
      "Fleurs comestibles",
    ],
    molds: [
      { size: "6-8p", price: 28 },
      { size: "8-10p", price: 33 },
      { size: "10-12p", price: 38 },
    ],
    price: 28.0,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Mimosa",
    slug: "mimosa",
    images: [
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
      "/images/cake-face2.svg",
    ],
    description:
      "Un gâteau au citron acidulé et rafraîchissant. Parfait pour les amateurs de saveurs citronnées ! Avec son glaçage au citron, il apporte une touche de fraîcheur à vos repas.",
    ingredients: [
      "Génoise Red Velvet",
      "Crème au fromage",
      "Glaçage au chocolat blanc",
      "Fruits frais",
      "Fleurs comestibles",
    ],
    molds: [
      { size: "6-8p", price: 22 },
      { size: "8-10p", price: 27 },
      { size: "10-12p", price: 32 },
    ],
    price: 22.0,
    isFeatured: true,
  },
];
