import Cloaker from "@/components/Cloaker";
import VigneuxContent from "./VigneuxContent";

export default function page() {
  return (
    <Cloaker city="Vigneux-sur-Seine" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <VigneuxContent />
    </Cloaker>
  );
}
