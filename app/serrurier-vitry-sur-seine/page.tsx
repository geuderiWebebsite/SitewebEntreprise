import Cloaker from "@/components/Cloaker";
import VitryContent from "./VitryContent";

export default function page() {
  return (
    <Cloaker city="Vitry-sur-Seine" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <VitryContent />
    </Cloaker>
  );
}
