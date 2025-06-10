import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";

const page = () => {
  return (
    <>
      <BackBtn content="Tous les entremets" link="/gateaux" />

      <CakeDetails />
    </>
  );
};
export default page;
