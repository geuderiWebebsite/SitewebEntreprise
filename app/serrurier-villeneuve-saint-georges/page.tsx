import Cloaker from "@/components/Cloaker";
import VilleneuveContent from "./VilleneuveContent";

export default function page() {
  return (
    <Cloaker city="Villeneuve-Saint-Georges" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <VilleneuveContent />
    </Cloaker>
  );
}
