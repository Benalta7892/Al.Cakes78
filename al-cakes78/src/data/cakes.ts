import type { Cake } from "@/types/cake";

export const CAKES: Cake[] = [
  {
    id: 1,
    name: "Dahlia",
    slug: "dahlia",
    images: [
      "/images/cake-face1.svg",
      "/images/dahlia-img2.jpeg",
      "/images/dahlia-img3.jpeg",
      "/images/dahlia-img4.jpeg",
    ],
    description:
      "Un dessert raffiné composé de plusieurs couches. Un biscuit croustillant, un insert fruits rouges gélifié, une mousse bavaroise à la vanille et un glaçage miroir optionnel. Idéal pour les grandes occasions.",
    ingredients: [
      "Biscuit croustillant à la vanille",
      "Insert fruits rouges gélifié",
      "Mousse bavaroise à la vanille",
      "Fruits rouges frais",
      "Feuilles de menthe",
      "Finition velours blanc ou glaçage miroir",
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
      "/images/camelia-img2.png",
      "/images/camelia-img3.png",
      "/images/camelia-img4.png",
    ],
    description:
      "Délicatesse vanillée aux notes délicates, fondante et légère. Idéal pour les célébrations ! Accompagné d'un glaçage crémeux, il ravira vos invités.",
    ingredients: [
      "Biscuit moelleux aux amandes",
      "Mousse vanille et rose",
      "Glaçage miroir rose poudré",
      "Décor floral comestible",
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
      "/images/iris-img2.png",
      "/images/iris-img3.png",
      "/images/iris-img4.png",
    ],
    description:
      "Un entremet subtil aux saveurs de myrtille et violette. Un équilibre fruité et floral qui séduit à chaque bouchée. Sa fraîcheur en fait un plaisir parfait pour les instants gourmands.",
    ingredients: [
      "Biscuit aux amandes",
      "Mousse légère à la myrtille",
      "Glaçage miroir violet irisé",
      "Décor pétales comestibles",
      "Poudre d’or",
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
      "/images/pivoine-img2.png",
      "/images/pivoine-img3.png",
      "/images/pivoine-img4.png",
    ],
    description:
      "Explosion de saveurs chocolatées, douce et gourmande. Un entremets qui combine intensité, douceur veloutée et éclat crémeux du chocolat sous trois harmonies, pour un plaisir gourmand et authentique.",
    ingredients: [
      "Mousse onctueuse au chocolat noir intense",
      "Crème légère au chocolat au lait",
      "Douce mousse au chocolat blanc",
      "Praliné croustillant",
      "Fleurs comestibles",
      "Glaçage miroir chocolat noir",
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
      "/images/cake-face5.svg",
      "/images/mimosa-img2.png",
      "/images/mimosa-img3.png",
      "/images/mimosa-img4.png",
    ],
    description:
      "Douceur citronnée aux touches florales ensoleillées. Parfait pour les amateurs de saveurs citronnées ! Avec son glaçage au citron, il apporte une touche de fraîcheur à vos repas.",
    ingredients: [
      "Crème mascarpone citronnée",
      "Mousse légère à la vanille",
      "Croustillant gourmand aux noix de pécan",
      "Glaçage miroir au citron",
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
