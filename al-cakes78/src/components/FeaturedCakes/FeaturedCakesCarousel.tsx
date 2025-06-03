import Image from "next/image";

type Cake = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  isFeatured: boolean;
};

type Props = {
  cakes: Cake[];
};

const FeaturedCakesCarousel: React.FC<Props> = ({ cakes }) => {
  return (
    <div>
      {cakes.map((cake) => (
        <div key={cake.id}>
          <Image
            src={cake.image}
            alt={cake.name}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <h3>{cake.name}</h3>
          <p>{cake.description}</p>
          <p>{cake.price} €</p>
        </div>
      ))}
    </div>
  );
};
export default FeaturedCakesCarousel;
