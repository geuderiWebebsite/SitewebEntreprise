import Cloaker from "@/components/Cloaker";
import BonneuilContent from "./BonneuilContent";

export default function page() {
  return (
    <Cloaker city="Bonneuil-sur-Marne" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <BonneuilContent />
    </Cloaker>
  );
}
