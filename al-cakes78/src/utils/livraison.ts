import { DELIVERY_ZONES } from "@/data/deliveryZones";

export const getDeliveryZone = (codePostal: string, totalPrice: number) => {
  if (totalPrice >= 85) {
    return {
      zone: "",
      price: 0,
      description: "",
    };
  }

  if (DELIVERY_ZONES.zone1.includes(codePostal)) {
    return {
      zone: "1",
      price: 10,
      description: "≤ 15 km",
    };
  }

  if (DELIVERY_ZONES.zone2.includes(codePostal)) {
    return {
      zone: "2",
      price: 15,
      description: "≤ 30 km",
    };
  }

  return {
    zone: "3",
    price: 20,
    description: "> 30 km",
  };
};
