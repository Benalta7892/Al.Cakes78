export type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Les gâteaux de cette pâtisserie sont tout simplement délicieux ! La texture, les saveurs, tout est parfaitement équilibré. Un vrai régal à chaque bouchée.",
    author: "Marie Dupont",
  },
  {
    id: 2,
    quote:
      "Un service impeccable et des créations uniques. J’ai commandé pour un anniversaire et tout le monde a été bluffé par la présentation et le goût.",
    author: "Jean Martin",
  },
  {
    id: 3,
    quote:
      "Chaque bouchée est un pur bonheur. Mention spéciale au gâteau au chocolat, fondant et intense, c’est devenu un incontournable pour nos fêtes.",
    author: "Sophie Leblanc",
  },
  {
    id: 4,
    quote:
      "Une expérience gustative inoubliable, je reviendrai sans hésiter ! Les saveurs sont subtiles et les visuels sont dignes d'une grande pâtisserie.",
    author: "Claire Bernard",
  },
  {
    id: 5,
    quote:
      "Des gâteaux qui allient créativité et saveurs. L’équipe est à l’écoute et chaque commande est préparée avec soin. Une vraie pépite !",
    author: "Lucie Moreau",
  },
];

export default TESTIMONIALS;
