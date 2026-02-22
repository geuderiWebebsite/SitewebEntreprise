import Cloaker from "@/components/Cloaker";
import VincennesContent from "./VincennesContent";

export default function page() {
  return (
    <Cloaker city="Vincennes" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <VincennesContent />
    </Cloaker>
  );
}
