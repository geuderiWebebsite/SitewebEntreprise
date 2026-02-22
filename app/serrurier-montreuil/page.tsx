import Cloaker from "@/components/Cloaker";
import MontreuilContent from "./MontreuilContent";

export default function page() {
  return (
    <Cloaker city="Montreuil" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <MontreuilContent />
    </Cloaker>
  );
}
